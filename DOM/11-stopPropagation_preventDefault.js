//DOM: Flujo de Eventos (Burbuja y Captura)
const $eventosDivs = document.querySelectorAll('.eventos-flujo div');
const $linkEventos = document.querySelector('.eventos-flujo a');

function flijoEventos(e) {
    console.log(`Hola, te saluda ${this.className}, evento originado en ${e.target.className}`);
    e.stopPropagation();//Detiene la propagacion 
}


$eventosDivs.forEach(div => {
    div.addEventListener('click', flijoEventos, {
    // Fase de burbuja
    //div.addEventListener("click" flijoEventos,)
    //div.addEventListener("click", flijoEventos, false)
    // Fase de captura
    //div.addEventListener("click", flijoEventos, true)
    capture:false, //flujo burbuja (false) - flujo capture (true)
    once:false, //el addEventListener sólo se ejecutará una vez
    });
});

$linkEventos.addEventListener("click", (e) => {
    alert(`Hola soy quien provocó el evento: ${e.target.tagName}`);
    e.preventDefault();//previene el evento por defecto (en este caso era el de abrir un link)
    e.stopPropagation();
})

console.log($eventosDivs);