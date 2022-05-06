// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrayCuadrado = (n1,n2) => {
    let numeros = [n1,n2];
    numeros.forEach((element, i) => console.log(Math.pow(numeros[i],2)));
}
arrayCuadrado(2,4);

const arrayCuadradoJMircha = (arr = undefined) => {
    if (arr === undefined || arr.length === 0) return console.warn("No ingresaste valores");
    if (!(arr instanceof Array)) return console.warn("El valor no es un array");
    for (let element of arr) {
        if(typeof element !== "number") return console.warn(`El valor ${element} no es un number`);
    }
    const newArray = arr.map(el => el * el);
    return console.warn(`Àrreglo original ${arr}./nArreglo elevado al cuadrado ${newArray}`)
}
arrayCuadradoJMircha([2,4]);
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const nMayorMenor = (n1,n2,n3) => {
    let array = [n1,n2,n3];
    console.log(`Numero menor ${Math.min(...array)}, Numero mayor ${Math.max(...array)}`);
}
nMayorMenor(3,2,8)

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const paresImpares = () => {
    const numeros = [1,2,3,4,5,6,7,8,9,10],
          pares = [],
          impares = [];
    numeros.forEach((element, i) => {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    })
    console.log(pares);
    console.log(impares);
}
paresImpares();

const paresImparesJmircha = (arr = undefined) => {
    if (arr === undefined || arr.length === 0) return console.warn("No ingresaste valores");
    if (!(arr instanceof Array)) return console.warn("El valor no es un array");
    for (let element of arr) {
        if(typeof element !== "number") return console.warn(`El valor ${element} no es un number`);
    }

    return console.info({
        pares: arr.filter(element => element % 2 === 0),
        impares: arr.filter(element => element % 2 !== 0)
    })
}
paresImparesJmircha([1,2,3,4,5,6,7,8,9]);