const myMap = new Map();
myMap.set("Nombre", "Jesus")
myMap.set("Apellido", "Mendoza")
myMap.set("Edad", 22)

console.log(myMap)

console.log(myMap.size)
console.log(myMap.has("Nombre"))
console.log(myMap.get("Nombre"))
myMap.set("Correo", "jm@gmail.com")
myMap.delete("Nombre")

console.log("***MAP MODIFICADO***")
console.log(myMap)

for (const [key, value] of myMap) {
    console.log(`KEY: ${key} \nVALUE: ${value}`)
}

const mapa2 = new Map([
    ["Name", "Chanchito"],
    ["Apellido", "Feliz"],
    ["Edad", 12]
]);

console.log(mapa2);
const keysMapa2 = [...mapa2.keys()];
const valuesMapa2 = [...mapa2.values()];

console.log("***LLAVES DE MAPA2***");
console.log(keysMapa2);
console.log("***VALUES DE MAPA2***");
console.log(valuesMapa2);
