const NOMBRE = Symbol("Hola")
const sym2 = Symbol("Descripcion de symbol")

const PERSONA  = ({
    [NOMBRE]: "Jon",
    edad: 35
})

console.log(PERSONA);
PERSONA.NOMBRE = "Jonathan Mircha"//variable modificada
console.log(PERSONA.NOMBRE)//hace referencia la variable modificada
console.log(PERSONA[NOMBRE])//hace referencia al symbol