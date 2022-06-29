// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.`

const factorial = (numero) => {
    let fac = 1;
    for (let i = numero; i >= 1; i--) {
        console.log(`${fac} x ${i} = ${fac*i}`)
        fac *= i; //fact = fact * i
    }
    console.log(fac)
}

factorial(5);