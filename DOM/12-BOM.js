//Browser Object Model

// confirm('Confirmacion');
// alert('Alerta');
// prompt('Prompt guarda valores introducidos por el usuario');

const $btnAbrir = document.querySelector('#abrir-ventana');
const $btnCerrar = document.querySelector('#cerrar-ventana');
const $btnImprimir = document.querySelector('#imprimir-ventana');

let ventana;

$btnAbrir.addEventListener('click', (e) => {
    ventana = window.open('https://www.google.com/')
    console.log(ventana);
});
$btnCerrar.addEventListener('click', (e) => {
    ventana.close();
});
$btnImprimir.addEventListener('click', (e) => {
    window.print();
});
