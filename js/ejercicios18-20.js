// 18) Programa una función que dada una cadena de texto cuente el número 
//de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const abc = (cadena) => {
    let vocales = /[a,e,i,o,u]/ig,
        cadena2 = cadena.split(new RegExp('[" ", ",","."]', 'ig'),).join(""),//quitar espacios
        result = vocales[Symbol.matchAll](cadena2);
        // nVocales = Array.from(result).length, solo itera una vez
        // nConsonantes = cadena2.length - nVocales; 
    console.log(`${cadena} tiene: ${Array.from(result).length} vocales y Consonantes ${cadena2.split(vocales).length}`);
};
abc("Hola, mundo");
//[] {}f
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validarNombre = (nombre) => {
    let caracteres = /[0,9]/ig;
    
    console.log( caracteres)
    nombre = nombre.split(" ").join("");

    // (nombre.includes(new RegExp(caracteres, "ig"), ""))
    // ?console.log("No es un nombre")
    // :console.log("Si es nombre");
    
}
validarNombre("Jesus Mendoz2");

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.