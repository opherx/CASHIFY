let dropDownMenu = document.querySelector(".dropdown-menu");
let closeHamburgerIcon = document.querySelector("#close-nav-icon");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let body = document.querySelector("body");

// NAVIGATION CONTROL

closeHamburgerIcon.addEventListener("click", ()=>{
    dropDownMenu.style.width = "0";
});

hamburgerMenu.addEventListener("click", ()=> {
    dropDownMenu.style.width = "200px";
})

// REDIRECT TO HOMEPAGE BUTTON




