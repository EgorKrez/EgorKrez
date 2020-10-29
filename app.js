function openNav() {
    let main = document.querySelector(".main")
    let nav = document.querySelector("nav")
    nav.style.width = "250px"
    main.style.marginLeft= "250px"
}

function closeNav() {
    let main = document.querySelector(".main")
    let nav = document.querySelector("nav")
    nav.style.width = "0px"
    main.style.marginLeft= "0px"
}