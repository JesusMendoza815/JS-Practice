// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrayCuadrado = (n1,n2) => {
    let numeros = [n1,n2];
    numeros.forEach((element, i) => console.log(Math.pow(numeros[i],2)));
}
arrayCuadrado(2,4);
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const nMayorMenor = (n1,n2,n3) => {
    let array = [n1,n2,n3];
    console.log(`Numero menor ${Math.min(...array)}, Numero mayor ${Math.max(...array)}`);
}
nMayorMenor(3,2,8)

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.