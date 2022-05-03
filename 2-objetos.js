const persona = {
    nombre: "Jon",
    apellidos: "Mendoza",
    soltero: true,
    psatimpos: "Videojuegos, Gym, Progrmación",
    contacto: {
        email: "jesus@gmail.com",
        numero: "44332342"
    },
    saludar(){
        console.log("Hola");
    },
    decirMiNombre() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellidos} y me pudes contactar al correo ${this.contacto.email}`);
    }
}

console.log(persona);
console.log(persona.psatimpos);
console.log(persona.contacto.email);
persona.saludar();
persona.decirMiNombre();

console.log(Object.keys(persona)); //Accede a los atributos
console.log(Object.values(persona)); //Accede a los valores de los atributos
console.log(persona.hasOwnProperty("nombre")); //Verifica qeu exista el atributo o propiedad
