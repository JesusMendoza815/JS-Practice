const persona = {
    nombre: '',
    apellido: '',
    edad: 0
}

const manejador = {
    set(obj, prop, value) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            console.error(`la propiedad ${prop} no existe`)
        }
        if ((prop === "nombre" || prop === "apellido") &&
            !(/^[A-Za-zñÑÁáÉéÍíÓóÚú\s]+$/g.test(value)))
        {
            console.error(`La propiedad ${value} solo acepta letras y espacios`)
        }
        obj[prop] = value;
    }
}

const jesus = new Proxy(persona, manejador);//objeto manejador
jesus.nombre = "Jesús";
jesus.apellido = "Mendoza";
jesus.edad = 22;
jesus.twitter = "Twitter@gmail.com";

console.log(jesus);
// console.log(persona);
