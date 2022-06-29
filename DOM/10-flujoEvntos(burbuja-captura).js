//DOM: Flujo de Eventos (Burbuja y Captura)
const $eventosDivs = document.querySelectorAll('.eventos-flujo div');

function flijoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, evento originado en ${e.target.className}`);
}


$eventosDivs.forEach(div => {
    div.addEventListener('click', flijoEventos, {
    // Fase de burbuja
    //div.addEventListener("click" flijoEventos,)
    //div.addEventListener("click", flijoEventos, false)
    // Fase de captura
    //div.addEventListener("click", flijoEventos, true)
    capture:false,
    once:true,
    });
});

console.log($eventosDivs);