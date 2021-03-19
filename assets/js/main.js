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

//open burger menu 
let burger = document.querySelector("#hamburger")
let navModal = document.querySelector(".nav-modal")

let closeModal = document.querySelector(".close-modal")

burger.addEventListener("click", function() {
    navModal.style.display = "block"
})

closeModal.addEventListener("click", function() {
    navModal.style.display = "none"
})

function clicked() {
    navModal.style.display = "none"
}

