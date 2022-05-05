// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const cadena = "Hola mundo";
console.log(cadena.length);

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
(function() {
    let cadena2 = cadena.slice(0,-2);
    console.log(cadena2);
})();


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function separarCadenas(cadena) {
    console.log(cadena.split(' '));
}
separarCadenas(cadena);


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function repetirCadena(cadena, n) {
    console.log(cadena.repeat(n));
}
repetirCadena(cadena, 3);