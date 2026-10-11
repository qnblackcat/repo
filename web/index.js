function swap(hide, show) {
    for (var i = document.querySelectorAll(hide).length - 1; i >= 0; i--) {
        document.querySelectorAll(hide)[i].style.display = "none";
    }
    for (var i = document.querySelectorAll(show).length - 1; i >= 0; i--) {
        document.querySelectorAll(show)[i].style.display = "block";
    }
    document.querySelector(".nav_btn" + show + "_btn").classList.add("active");
    document.querySelector(".nav_btn" + hide + "_btn").classList.remove("active")
}

function externalize() {
    for (var i = document.querySelectorAll("a").length - 1; i >= 0; i--) {
        document.querySelectorAll("a")[0].setAttribute("target","blank")
    }
}
function darkMode(isOled) {
    document.documentElement.classList.add("dark");
    if (isOled) {
        document.documentElement.style.setProperty("--bg", "black");
    }
}
if (navigator.userAgent.toLowerCase().indexOf("dark") != -1) {
    darkMode(navigator.userAgent.toLowerCase().indexOf("oled") != -1 || navigator.userAgent.toLowerCase().indexOf("pure-black") != -1);
}
function copyRepoURL(button, url) {
    navigator.clipboard.writeText(url).then(function () {
        button.textContent = "Copied!";
        setTimeout(function () { button.textContent = "Copy"; }, 1500);
    });
}

// Packages list: only the first few packages are shown until "Show more" is tapped. While searching, every
// package whose name contains the query (ignoring case) is shown.
var PACKAGES_PREVIEW = 6;
var packagesExpanded = false;

function updatePackages() {
    var query = document.querySelector(".package_search").value.trim().toLowerCase();
    var packages = document.querySelectorAll(".packageList > .package");
    var matches = 0;
    for (var i = 0; i < packages.length; i++) {
        var match = packages[i].getAttribute("data-name").toLowerCase().indexOf(query) != -1;
        if (match) {
            matches++;
        }
        packages[i].hidden = !match || (!query && !packagesExpanded && matches > PACKAGES_PREVIEW);
    }
    document.querySelector(".no_results").hidden = matches > 0;
    var button = document.querySelector(".show_more");
    button.hidden = query !== "" || packages.length <= PACKAGES_PREVIEW;
    button.textContent = packagesExpanded ? "Show less" : "Show more (" + (packages.length - PACKAGES_PREVIEW) + ")";
}

function filterPackages() {
    updatePackages();
}

function toggleShowMore() {
    packagesExpanded = !packagesExpanded;
    updatePackages();
    if (!packagesExpanded) {
        document.querySelector(".packageList").scrollIntoView({block: "start"});
    }
}

if (document.querySelector(".packageList")) {
    updatePackages();
}
