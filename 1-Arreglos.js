const colores = ["Rojo", "Green", "Blue"];

colores.forEach(function(element, index) {
    console.log(`<li id="${index}">${element}</li>`);
});

const nombre = ["Jaun", "Pedro", "Toño", "Pepe"];

nombre.forEach(function(element, index) {
    index ++;
    console.log(`Numero y nombre de paciente: ${index} ${element}`)
});