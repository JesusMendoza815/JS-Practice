console.log("*****While****");

let contador = 0;

while (contador < 10) {
    console.log(contador++);
}

console.log("******Do while******") //Siempre se ejecuta una vez
do {
    console.log(contador++)
} while (contador < 10);

console.log("****For****");

let numeros = [12,23,34,445,56,67];
for (let index = 0; index < numeros.length; index++) {
    console.log(`${index}- ${numeros[index]}`);
}

console.log("****ForIn****");

const jon = {
    nombre: "Jon",
    apellido: "Mendoza"
}
for (const propiedad in jon) { //For in permite recorrer propiedades de un objeto
    console.log(propiedad); //Accede a propiedaddes
    console.log(`Key ${propiedad}, Value: ${jon[propiedad]}`);
    //Acceder al Key/Propiedades*******Acceder al calor de las Keys/Propiedades

}


console.log("****For OF**********");
for (const elemento of numeros) { //Permite recorrer todos los elmentos de caulquier objeto que sea iterable
    console.log(numeros);
    console.log(jon);
}