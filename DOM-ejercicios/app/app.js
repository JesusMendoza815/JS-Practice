import { showMenu } from '../Models/models.js';
import { digitalClock, alarm } from "../appReloj/reloj.js";


const container = document.getElementById("burger_menu");
// const btnShow = document.getElementById("btn_show");
// const btnBurgerMenu = document.querySelectorAll(".link_burger_menu");

document.addEventListener("DOMContentLoaded", (e) =>{
    showMenu(container, '#btn_show', '.link_burger_menu');
    digitalClock('#reloj','#activar-reloj','#detener-reloj');
    alarm('./assets/sound.mp3','#iniciar-alarma','#detener-alarma');
})

