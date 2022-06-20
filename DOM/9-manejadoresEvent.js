function HolaMundo() {
    alert('Hola Mundo');
}


const $eventoSemantico = document.querySelector('#evento-semantico'); 
const $eventoMultiple = document.querySelector('#evento-multiple');

$eventoSemantico.onclick = HolaMundo;

$eventoSemantico.onclick = function(e) {
    alert('Evento Semantico clicked');
    console.log(e);
}

$eventoMultiple.addEventListener ('click', (e) => {
    alert('USING addEventListener');
    console.log(e);
})