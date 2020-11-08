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

let inputName = document.querySelector(".input-name")
let inputEmail = document.querySelector(".input-email")
let inputSubject = document.querySelector(".input-subject")
let inputMessage = document.querySelector(".input-message")
let button = document.querySelector(".field-button")

let info = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

let arrayInfo = []

button.onclick = () => {
    info.name = inputName.value
    info.email = inputEmail.value
    info.subject = inputSubject.value
    info.message = inputMessage.value
    if (info.name != "" && info.email != "" && info.subject != "" && info.message != "") {
    inputName.value = ""
    inputEmail.value = ""
    inputSubject.value = ""
    inputMessage.value = ""
    arrayInfo.push(info)
    arrayInfo.forEach(function(item, i) {
        console.log( (i + 1) + ") " 
        + "name: " + item.name +  "; email: " + item.email + 
        "; subject: " + item.subject +  "; message: " + item.message);
      });
    }
    else alert(`Заполните все поля!\n`)
}


