let cadena = "lorem jesus mendoxa";
let number = 100;

let expReg = new RegExp("Jesus" , "i"); //i no respeta mayusculas ni minusculas
let expReg2 = /Jesus/i; //Forma mas corta *no se necesita del constructor*
let expReg3 = /\d/i;

console.log(expReg.test(cadena)); //devuelve en forma de true o false 
console.log(expReg2.exec(cadena)); //exect devuelve en forma de arreglo 

console.log(expReg3.test(number));