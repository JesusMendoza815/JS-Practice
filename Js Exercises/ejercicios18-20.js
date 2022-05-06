// 18) Programa una función que dada una cadena de texto cuente el número 
//de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const abc = (cadena) => {
    let vocales = /[a,e,i,o,u]/ig,
        cadena2 = cadena.split(new RegExp('[" ", ",","."]', 'ig'),).join(""),//quitar espacios
        result = vocales[Symbol.matchAll](cadena2);
    console.log(`${cadena} tiene: ${Array.from(result).length} vocales y Consonantes ${cadena2.split(vocales).length}`);
}
abc("Hola, mundo");
//[] {}f
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre="") =>{
if (!nombre) return console.warn("No ingreaste el nombre");
if (typeof nombre !== "string") return console.warn(`El ${nombre.toUpperCase()} contiene caracteres inválidos`);

let reExp = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(nombre);
/*
^ No puede haber nada antes de de la expresion a validar
$ No puede haber nada después de la expresion a validar
+ Evalúa por cada carácter de la cadena
\s acepta espacios en blanco
*/
return (reExp)
? console.log("Es valido")
: console.log("No es valido");

}
validarNombre("8Jesús Mendoza")

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email) => {
    let regExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validar = regExp.test(email);
    if (validar == true) {
        console.log('El correo es válido');
    }
}
validarEmail("jesus@gmail.c");