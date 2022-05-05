// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
/*el numero a dividir debe ser mayor a 1
es residuo debe ser 0
sólo debe haber 2 resultados con residuo de 0 */
const primo = (numero) => {
    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
    ? console.log(`El numero ${numero} NO es primo`) //falso
    : console.log(`El numero ${numero} SI es primo`)//verdadero
}
primo(3);
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const nPar = (n) => {
    // let par = false;
    // if (n % 2 === 0) {
    //     par = true;
    //     console.log(par);
    // } else {
    //     console.log(par);
    // }
    (n % 2 === 0) ? console.log("Si es") : console.log("no es");
}
nPar(4);
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F
const convertir = (n, unidad) => {
    let resultado = undefined;
    if (unidad === "C") {
        resultado = ((n * 1.8) + 32).toFixed(2);
        console.log(`${n}C° = ${resultado}F°`);
    }else if (unidad === "F") {
        resultado = ((5/9) * (n - 32)).toFixed(2);
        console.log(`${n}F° = ${resultado}C°`);
    }
}

convertir(0, "F")