
let dropDownMenu = document.querySelector(".dropdown-menu");
let closeHamburgerIcon = document.querySelector("#close-nav-icon");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let body = document.querySelector("body");
let navLinks = document.querySelectorAll(".nav-links");

// NAVIGATION CONTROL

closeHamburgerIcon.addEventListener("click", ()=>{
    dropDownMenu.style.width = "0";
});

hamburgerMenu.addEventListener("click", ()=> {
    dropDownMenu.style.width = "200px";
});



// ANIMATION

// navLinks.forEach((link)=> {
//     link.addEventListener("click", ()=>{
//         link.classList.add('animate__animated')
//         link.classList.add('animate__bounce')
//     })
// });




