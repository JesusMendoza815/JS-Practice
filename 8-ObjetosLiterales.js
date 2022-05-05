let nombre = "Kenai",
edad = 4;

const perro = {
    nombre:nombre,
    edad:edad,
    ladrar:function (){
        console.log("Guaw");
    }
}
console.log(perro);
perro.ladrar();

console.log("***Nueva forma de declarr objetos****");
const dog = {
    nombre,
    edad,
    raza: "callejero",
    ladrar(){
        console.log("Guaw Guaw");
    }
}
console.log(dog)