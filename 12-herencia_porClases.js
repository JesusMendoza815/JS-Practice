class Animal{
    constructor(nombre, genero){
        //El constructor es un método especial que se ejecuta al momento de instanciar la clase
        //Atributos
        this.nombre = nombre;
        this.genero = genero;
    }
    //Métodos
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }
    sonar(){
        console.log("Soy un perro y Ladro")
    }
    ladrar(){
        console.log("Guaw-Guaw")
    }

    //Un método estático se puede ejecutar sin necesidad de instanciar la calse
    static queEres(){
        console.log("Los perros somos animales mamíferos considerados los mejores amigos del hombre")
    }

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();

const mimi = new Animal("Mimi","Hembra"),
      Scooby = new Perro("Scooby","Macho","Grande");

console.log(mimi);
mimi.sonar();
mimi.saludar();
console.log("*****PERRO****");
console.log(Scooby);
Scooby.sonar();
Scooby.saludar();
Scooby.ladrar();

Scooby.setRaza = "Gran Danés";
console.log(Scooby);
