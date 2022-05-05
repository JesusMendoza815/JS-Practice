/*
POO
Clases-Modelo a seguir
Objetos-Es una instancia de una clase (Copia-Base)
        Atributos
        Metodos
*/

const animal = {
    nombre: "Perro",
    sonar(){
        console.log("Suenooo");
    }
}
console.log(animal);

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){
        console.log("Lola");
    }
}
console.log(animal2);
//No funcional para crear N cantidad de animales

//Funcion constructura
//V1 - Asigna los métodos al prototipo, no a la funcion
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
  //Métodos
    this.sonar = function(){
       console.log("Ladrar") 
    }
}
//V2 - Asigna los metodos a la funcion
//Ahorra espacio en memoria
function AnimalV2(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}
//Métodos
AnimalV2.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}
AnimalV2.prototype.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre}`);
}

//Herecia prototípica
function Perro(nombre, genero, tamanio){
    this.super = AnimalV2; //Se le asigna como elemento padre a animalV2
    this.super(nombre, genero);//ejecuta el método super y se asigna los atributos de la calse padre
    this.tamanio = tamanio; //definimos o agregamos el atributo local tamanio
}

//Herecia de animalV2
Perro.prototype = new AnimalV2();
Perro.prototype.constructor = Perro;

//Sobreescritura de la funcion en el prototipo padre
Perro.prototype.sonar = function(){
    console.log("Soy un perro y me gusta Ladrar");
}
Perro.prototype.ladrar = function(){
    console.log("Guaw-Guaw");
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
      lolaBunny = new AnimalV2("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();

