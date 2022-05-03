// `9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const retonoAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(retonoAleatorio(501, 600));
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero)=> {
    numero = numero.toString();
    let numero2 = numero.split("").reverse().join("");
    console.log(numero2 === numero);
    // (numero2 === numero) ? console.log(true) : console.log(false);
}
capicua(2002);
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.`
const factorial = (numero) => {
    let fac = 1;
    for (let i = numero; i > 1; i--) {
        console.log(`${fac} x ${i} = ${fac*i}`)
        fac *= i; //fact = fact * i
    }
    return console.log(fac)
}

factorial(5);