import {loadHomePage} from "./Pages/home";
import {loadMenuPage} from "./Pages/menu";
import {loadContactPage} from "./Pages/contact";
import "./Styles/styles.css";


const homeButton =document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

loadHomePage();

homeButton.addEventListener("click", () =>{
    const restaurantFirstPage = document.getElementById("content");
    while(restaurantFirstPage.firstChild){
        restaurantFirstPage.firstChild.remove();
    }
    loadHomePage();
});

menuButton.addEventListener("click", () =>{
    const restaurantFirstPage = document.getElementById("content");
    while(restaurantFirstPage.firstChild){
        restaurantFirstPage.firstChild.remove();
    }
    loadMenuPage();
});

contactButton.addEventListener("click", () =>{
    const restaurantFirstPage = document.getElementById("content");
    while(restaurantFirstPage.firstChild){
        restaurantFirstPage.firstChild.remove();
    }
    loadContactPage();
});
