//Tipos de timers

/*setTimeout se ejecuta despues del tiempo asigando (milisegundos)
setTimeout(() => {
    console.log('Qué rollo, soy Timeout')
},1000)
SetINterval se ejecuta indeterminadas veces segun el tiempo asignado
setInterval(() => {
    console.log(`Hola, soy Interval`)
},3000)*/

const temporizador = setInterval(() => {
    console.log(new Date().toLocaleDateString())
},1000);

clearInterval(temporizador);