// 5) Programa una función que invierta las palabras de una cadena de cadena, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function invertirPalabra(cadena) {
    console.log(cadena.split("").reverse().join(""));
}
invertirPalabra("Hola mundo");
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const textoEnCadena = (cadena = "", palabra = "") => {
    if (!cadena) return console.warn("No ingrsaste la cadena");
    if (!palabra) return console.warn("No ingresate la palabra a evaluar");

    let i = 0, contador = 0;
    while (i !==-1) { //-1 porque si indexOf es verdadero devuelve la posicion donde encontró la palabra de lo contrario da -1
        i = cadena.indexOf(palabra, i); //Iguala i al resultado de indexOf(item a buscar / )
        if (i !== -1) {
            i++; 
            contador++;
        }
    }
    return console.info(`la palabra "${palabra}" se repite ${contador} veces`)
}
textoEnCadena("Hola mundo como estas mundo", "mundo")
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
/*function palidromo(palabra) {
    const palabra2 = palabra.split("").reverse().join("");
    if (palabra == palabra2) {
        console.info(true)
    }else {
        console.info(false);
    }
}*/
const palindromo = (palabra = "") => {
    if(!palabra) return console.warn("Ingresa una palabra");

    palabra = palabra.toLocaleLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return  (palabra === alReves) //siempre se compara con true
        ? console.info(`Sí es palindromo, palabra usada: ${alReves}`)
        : console.info(`No es palindromo, palabra usada: ${palabra}`)
} 
palindromo("oso");
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
function eliminarPatrones(cadena, patron) {
    cadena = cadena.split(patron).join("");
    console.log(cadena)
}
eliminarPatrones("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
/*No aceptará expresiones regulares como el siguiente ejemplo */

const eliminarPatrones2 = (cadena="", patron="")=> {
    (!cadena) //Evalúa si es diferente a cadena=""
    ? console.warn("No ingresate un cadena", cadena)//falso, haz esto
    : (!patron)//evalua si es diferente a patron=""
        ? console.log("No ingresate un patron")//falso haz esto
        : console.log(cadena.replace(new RegExp(patron, "ig"), ""));//verdadero, haz esto, ig ignora si son mayusculas o minusculas/g:para que no se detenga en la primera coincidencia
}

eliminarPatrones2();
eliminarPatrones2("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarPatrones2("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarPatrones2("Hola mundo como estas", "[a-h]");/*[a-f] es una expresion regular y se eliminarán la coincidencias desde la A hasta la F */