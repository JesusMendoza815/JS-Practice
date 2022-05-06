const saludar = nombre => console.log(`Hola ${nombre}`);
saludar("Irma");


const suma = (a,b) => a + b; 
//Expresamos la funcion en una constante llamada suma
//la funcion recibe dos parametros

//la funcion da un return por defecto
//Que hace ese return return a+b;
console.log(suma(5,5));


//Una funcion con varias lineas de codigo lleva llaves
const funcionVariasLineas = () => {
    console.log("1");
    console.log("2");
    console.log("3");
}
funcionVariasLineas();

//ForeEach

const numeros = [1,2,3,4,5];

numeros.forEach((element,index) => console.log(`${element} está en ${index}`));


//Arrow functoin dentro de un objeto literal
const perro = {
    nombre: 'Kenai',
    edad: 12,
    ladrar(){
        console.log(this); //en este contexo this hará referancia a el objeto 
    }
}

perro.ladrar();