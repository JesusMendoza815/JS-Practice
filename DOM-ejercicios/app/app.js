import { showMenu } from '../Models/models.js';
const container = document.getElementById("burger_menu");
// const btnShow = document.getElementById("btn_show");
// const btnBurgerMenu = document.querySelectorAll(".link_burger_menu");

document.addEventListener("DOMContentLoaded", () =>{
    showMenu(container, '#btn_show', '.link_burger_menu');
})

