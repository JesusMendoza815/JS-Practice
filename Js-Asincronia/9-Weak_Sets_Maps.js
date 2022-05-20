//No se puede iterar
//No se puede usar el método clear 
//No se puede obtener su tamaño (length/size)

//add,has,delete puseden ser usados en weekset

// const Wset = new WeakSet([1,2,3,3,4,4,"Hola"])
//Invalido, no se permite usar el constructor de la funcion,
//se deben usar el metodo WeakSet.add
/*

const Wset = new WeakSet()
// Wset.add(1) Invalido, sólo admite valores "débiles"; objetos

let valor1 = {"Nombre": "Jesus"}
let valor2 = {"Apellido": "Mendoza"}
let valor3 = {"Edad": "22"}

Wset.add(valor1)
// Wset.add(valor2, valor3) //Sólo agregará el primer valor, sólo agrega de un sólo valor a la vez

console.log(Wset)

console.log(Wset.has(valor1))
console.log(Wset.has(valor3))

Wset.delete(valor1)
console.log("Tiene el valor1? (Se borró)" + Wset.has(valor1))

Wset.add(valor1)
Wset.add(valor2)
Wset.add(valor3)

setInterval(() => console.log(Wset), 1000)

setTimeout(() => { //Si WeakSet identifica algun valor como null. undefined, lo mada a la basura
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000)

*/

// const WeakMap = new WeakMap([ //NO SE PUDEN AGRGAR DATOS DESDE EL CONSTRUCTOR
//     ["Name", "Pepe"]
//     ["Last Name", "Pica"]
//     ["Edad", 22]
//     [null, "nulo"]
// ]);


const WMap = new WeakMap();

let llave1 = {}
let llave2 = {}
let llave3 = {}

WMap.set(llave1, 1)
WMap.set(llave2, 2)
console.log(WMap)
console.log(WMap.has(llave3))
WMap.set(llave3, 3)
console.log(WMap.get(llave3))
WMap.delete(llave3)
console.log(WMap)

