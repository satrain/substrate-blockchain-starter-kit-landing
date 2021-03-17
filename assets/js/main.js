// navigation on scroll effect
const header = document.querySelector("header")

let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 50) {
        document.querySelector("header").style.background = "#0439F8";
        document.querySelector("header").style.height = "127px";
        document.querySelector("header").style.transition = ".5s";
        document.querySelector("header").style.background = "transparent";
    } else {
        document.querySelector("header").style.background = "rgba(13, 13, 13, .9)";
        document.querySelector("header").style.height = "85px";
        document.querySelector("header").style.transition = ".5s";
    }
    prevScrollpos = currentScrollPos;
})