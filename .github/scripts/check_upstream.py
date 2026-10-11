#!/usr/bin/env python3
"""
Compares each package's version in this repo with the version of its upstream project on GitHub and opens an
issue (label "upstream") when upstream is newer. Upstream packages are listed in .github/upstream.json.

The upstream version is read from the Theos control file on the default branch, else the latest release, else
the latest tag. Run with --dry-run to only print the comparison.
"""
import base64
import json
import os
import re
import sys
import urllib.error
import urllib.request

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
API = "https://api.github.com"
TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO = os.environ.get("GITHUB_REPOSITORY", "qnblackcat/repo")
LABEL = "upstream"


def api(path, method="GET", body=None):
    request = urllib.request.Request(API + path, method=method,
                                     data=json.dumps(body).encode() if body is not None else None)
    request.add_header("Accept", "application/vnd.github+json")
    if TOKEN:
        request.add_header("Authorization", "Bearer " + TOKEN)
    try:
        with urllib.request.urlopen(request) as response:
            return json.loads(response.read() or "null")
    except urllib.error.HTTPError as error:
        if error.code in (404, 409, 422):
            return None
        raise


def version_key(version):
    return [int(part) if part.isdigit() else 0 for part in re.split(r"[.\-~+]", version)]


def upstream_version(repo):
    for path in ("control", "layout/DEBIAN/control"):
        content = api("/repos/{0}/contents/{1}".format(repo, path))
        if content and content.get("content"):
            match = re.search(r"^Version:\s*(\S+)", base64.b64decode(content["content"]).decode("utf-8", "replace"),
                              re.MULTILINE)
            if match:
                return match.group(1), "control"
    release = api("/repos/{0}/releases/latest".format(repo))
    if release and release.get("tag_name"):
        return release["tag_name"].lstrip("vV"), "release"
    tags = api("/repos/{0}/tags?per_page=1".format(repo))
    if tags:
        return tags[0]["name"].lstrip("vV"), "tag"
    return None, None


def existing_titles():
    titles, page = set(), 1
    while True:
        issues = api("/repos/{0}/issues?state=all&labels={1}&per_page=100&page={2}".format(REPO, LABEL, page))
        if not issues:
            return titles
        titles.update(issue["title"] for issue in issues)
        page += 1


def main():
    dry_run = "--dry-run" in sys.argv
    with open(os.path.join(ROOT, ".github", "upstream.json")) as f:
        upstreams = json.load(f)
    with open(os.path.join(ROOT, "api", "tweak_release.json")) as f:
        tweak_release = json.load(f)

    ours = {}
    for tweak in tweak_release:
        name = re.sub(r"\s*\((rootless|roothide)\)\s*$", "", tweak["name"], flags=re.IGNORECASE)
        if tweak["bundle_id"] not in ours or version_key(tweak["version"]) > version_key(ours[tweak["bundle_id"]][1]):
            ours[tweak["bundle_id"]] = (name, tweak["version"])

    titles = set() if dry_run else existing_titles()
    if not dry_run:
        api("/repos/{0}/labels".format(REPO), "POST", {"name": LABEL, "color": "0e8a16",
                                                        "description": "A newer upstream version is available"})

    for bundle_id, repo in sorted(upstreams.items()):
        if bundle_id not in ours:
            print("? {0}: not in this repo".format(bundle_id))
            continue
        name, version = ours[bundle_id]
        latest, origin = upstream_version(repo)
        if latest is None:
            print("? {0} {1}: no version found in {2}".format(name, version, repo))
            continue
        newer = version_key(latest) > version_key(version)
        print("{0} {1:24} repo {2:10} upstream {3:10} ({4}, {5})".format("!" if newer else " ", name, version,
                                                                          latest, origin, repo))
        if not newer or dry_run:
            continue
        title = "[Upstream] {0} {1} (repo has {2})".format(name, latest, version)
        if title in titles:
            continue
        body = ("[{0}](https://github.com/{0}) has version **{1}** ({2}), this repo ships **{3}** of `{4}`.\n\n"
                "Rebuild the rootless/roothide packages if the update is worth shipping, or close this issue to "
                "skip this version.").format(repo, latest, origin, version, bundle_id)
        api("/repos/{0}/issues".format(REPO), "POST", {"title": title, "body": body, "labels": [LABEL]})
        print("  opened issue: " + title)


if __name__ == "__main__":
    main()
