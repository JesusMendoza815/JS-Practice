let hora = 12;

/*
Déjame dormir 0hrs - 5hrs
Buenos días 6hrs - 11hrs
Buenas tardes 12hrs - 18hrs
Buenas noches 18hrs - 23hrs
*/

if (hora >= 0 && hora <= 5) {
    console.log("Dékame dormir");
} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos Días");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas Tardes");
} else if (hora  >= 19 && hora <= 23) {
    console.log("Buenas noches");
}else{
    console.log("Fuera de rango")
}

console.log("****Operador Ternario****");
/*
Operador ternario (condicion) ? verdadero:falso
*/
let edad = 1;
let eresMayor = (edad >= 18) ? "Eres mayor de edad":"Eres menor de edad";
console.log(eresMayor);


/*Switch case */
console.log("****Switch Case******");

let dia = 22;

switch (dia) {
    case 1:
        console.log("Opcion 1");
        break;
    case 2:
        console.log("Opcion 2");
        break;
    case 3:
        console.log("Opcion 3");
        break;

    default:
        console.log("Esa opcion no existe");
        break;
}
