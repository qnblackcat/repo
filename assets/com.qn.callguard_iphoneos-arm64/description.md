# CallGuard

Silently block incoming SIM calls by number prefix (e.g. `0285671`), so a whole range is covered without listing each number.

- Add the prefixes you want to block in Settings → CallGuard. A prefix needs at least 3 digits, with no upper length limit.
- `+84…` and `84…` are normalized to `0…` before matching.
- Numbers in Contacts are always let through (can be turned off with "Block contacts too").
- Numbers you have called before (in Recents) are also let through (can be turned off).
