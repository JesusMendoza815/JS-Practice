// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const convertir = (n, base)=> {
    let nStr = n.toString().split(""), 
               potenciado = undefined;
    if (base === 2) {
        for (let i = 0; i < nStr.length; i++) {
            potenciado = Math.pow(base, i);
            if (nStr[i] == 1) potenciado += potenciado;  
        }
        console.log(`${potenciado} base 10`);
    }else if (base === 10){
        //aqui iba el otro XD
    }
    
}
const convertirCorto = (n, base) => {
    if (base == 2) {
        console.log(`Valor ${n}, base ${base} --> Valor ${parseInt(n, base)} base 2`);
    } else if (base == 10) {
        console.log(`Valor ${n}, base ${base} --> Valor ${n.toString(10)} base 10`);
    }
}
convertir(100,2)
convertirCorto(100,2)


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuento = (costo, descuento)=>{
    console.log(`Costo original: ${costo}, Costo con descuento de ${descuento}%: ${costo - ((costo*descuento)/100)}`);
}
descuento(1000, 20);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const dateCalc = (y,m,d) => {
    let nacimiento = new Date(y,m,d),
        fechaActual = new Date(),
        msTranscurridos = fechaActual - nacimiento,
        res = Math.floor(msTranscurridos / (1000 * 60 * 60 * 24 * 365)); //ms s minutos horas dias 
    console.log(res);
}

dateCalc(2000, 3, 11);//año mes(Abril) día