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
    var darkColor = isOled ? "black" : "#161616";
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.background = darkColor;
    for (var i = document.querySelectorAll(".subtle_link, .subtle_link p, .subtle_link span").length - 1; i >= 0; i--) {
        document.querySelectorAll(".subtle_link, .subtle_link p, .subtle_link span")[i].style.color = "white";
    }
}
if (navigator.userAgent.toLowerCase().indexOf("dark") != -1) {
    darkMode(navigator.userAgent.toLowerCase().indexOf("oled") != -1 || navigator.userAgent.toLowerCase().indexOf("pure-black") != -1);
}