function openNav() {
    let main = document.querySelector(".short-bio")
    let nav = document.querySelector("nav")
    let navMenu = document.querySelector(".nav-menu")
    let href = document.querySelector(".href-block")
    nav.style.height = "280px"
    navMenu.style.height = "280px"
}

function closeNav() {
    let main = document.querySelector(".short-bio")
    let nav = document.querySelector("nav")
    let navMenu = document.querySelector(".nav-menu")
    nav.style.height = "50px"
    navMenu.style.height = "50px"
}

 function showTitle(t) {
    document.querySelector("title").text = t + " - Egor Krez"
} 

