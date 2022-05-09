// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const arrMinMax = (arr = undefined) => {
    console.log({
        // entender: arr.map(el => el * 2),
        // original: arr,
        asc: arr.map(el => el).sort((a,b) => a - b),
        decs: arr.map(el => el).sort((a,b) => a - b).reverse()
    })
}
arrMinMax([6,3,8,21,6]);
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const arrayNoRepeats = (arr) => {
    console.log({
        original: arr,
        noRepeats: arr.filter((valor, index, selfArr) => selfArr.indexOf(valor) === index) 
    })
}
arrayNoRepeats(["x", 10, "x", 2, "10", 10, true, true])
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const calcPromedio = (arr) => {
    let promedio = arr.reduce((Acumulador, valorActual) => Acumulador + valorActual) / arr.length
    console.log(promedio)
}
calcPromedio([9,8,7,6,5,4,3,2,1,0])