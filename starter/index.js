console.log("Pls work!")

// debugger

document.body.children[0].children[0].textContent = "Welcome to zkpr."

//Create
    //1. create element with .createElement
    const cardHeader = document.createElement('h2')
    //2. add stylings
    cardHeader.id = "card-header"
    cardHeader.textContent = "Look at those cute animals!"
    //3. add it to the page
        //find parent element
    const section = document.querySelector(".container")
        //append or prepend to section
    section.append(cardHeader)
    section.prepend(cardHeader)

    //OR
const animalList = document.querySelector("#animal-list")
animalList.innerHTML = "<h3>new string here! <span>ok</span></h3>"
    //will append to our html at the section
animalList.innerHtmll += ``// browser has to recreate every single one of these instances


    //1. create outer element using createElement
    const outerLi = document.createElement("li")
    outerLi.className = "card"
    //2. user innerHTML to create all of its children
    outerLi.innerHTML = `` //dom elements
    //3. slap it on the DOM
    animalList.append(outerLi)
//Read
const menu = document.querySelector("#menu")
const menuHeader = menu.querySelector("h1")

const cards = document.querySelectorAll(".card")
    //w3 css selectors is good to reference 

// //Update
// menuHeader.textContent = "something new!"
//     //textContent is a reader method (able to read) and writer (able to write) method
// menuHeader.id = "menu-header"
//     //assign new id
// menuHeader.style.color = "red"
// menuHeader.style.borderRight = "3px solid red"

// menuHeader.className = "redish"
// menuHeader.classList.remove("redish")
//     //class as the collection rather than a string

// //Delete
// menuHeader.classList.toggle("redish") // toggle is if statement. if menuHeader has class redish, remove it

//     //easiest way:
// menuHeader.remove() //delete specific elements from the page
