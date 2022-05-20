//SET: Arreglos que eliminan duplicados
const SET1 = new Set([1,2,3,3,4,true,true]);
const SET2 = new Set();
SET2.add(1)
SET2.add(2)
SET2.add(3)
SET2.add(3)
SET2.add(true)
SET2.add(false)
SET2.add("Seré Eliminado")

console.log(SET1)
console.log(SET1.size)
console.log(SET2)
console.log(SET2.size)

//COMO RECORRER UN SET
console.log("***SET1 CON FOR OF***")
for (const item of SET1) {
    console.log(item);
}

console.log("***SET2 CON FOReach***")
SET2.forEach(item => console.log(item))

//Convertir Set a Array
//SET no puede usar length
//SET no puede invocar un elemento con SET[0]
console.log("***SET1 CONVERTIDO EN ARREGLO***")
const myArray = Array.from(SET1)
console.log(myArray)

//Eliminar elementos de set
console.log("***ELIMINANDO UN ELEMENTO DE SET2")
SET2.delete("Seré Eliminado")
console.log(SET2)

//Comprobar existencia de un objeto en un set
console.log("***Comprobar existencia de un objeto en un set***")
console.log(SET2.has(1))

//Limpiar un set
console.log("***Limpiar un set***")
SET2.clear();
console.log(SET2)

