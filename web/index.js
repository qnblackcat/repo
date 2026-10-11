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

// Packages search: keeps packages whose name contains the query, ignoring case.
function filterPackages(query) {
    query = query.trim().toLowerCase();
    var packages = document.querySelectorAll(".packageList > .package");
    var shown = 0;
    for (var i = 0; i < packages.length; i++) {
        var match = packages[i].getAttribute("data-name").toLowerCase().indexOf(query) != -1;
        packages[i].hidden = !match;
        if (match) {
            shown++;
        }
    }
    document.querySelector(".no_results").hidden = shown > 0;
}
