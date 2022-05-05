const numeros = [1,2,3];

console.log("********Sin destructuracion************");

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];
console.log(uno,dos,tres);

console.log("*****Con destructurción***");

const [one,two,three] = numeros;
console.log(one,two,three);

console.log("*****Objeto con destructurción********");

let persona = {
    nombre: "Jesus",
    apellido: "Mendoza",
    edad: 23
}

const {nombre, apellido, edad} = persona; //La variable debe tener el mismo nombre que en la propiedd del objeto
console.log(nombre, apellido, edad);

