// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

class Pelicula {
    constructor(idIMDB, titulo, director,anioEstreno, originCountry, genero, calificacionenIMBD) {
        this.idIMDB = idIMDB;
        this.titulo = titulo;  
        this.director = director;   
        this.anioEstreno = anioEstreno;  
        this.originCountry = originCountry;  
        this.genero = genero; 
        this.calificacionenIMBD = calificacionenIMBD;
        this.validarIMDB(idIMDB)
        this.validarLength(titulo, director)
        this.validarAnioEstreno(anioEstreno)
        this.validateGenderCountry(originCountry, genero)
        this.validarCal(calificacionenIMBD)
    }
    validarCadenas(propiedad, valor) {
        if (!valor) return console.warn("Valor vacio")
        if (typeof valor !== "string") return console.warn(`${propiedad} "${valor}" no es una cadena`)
        return true;
    }
    validarIMDB(idIMDB) {
        if (this.validarCadenas("IMDB", idIMDB)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(idIMDB)))
                return console.warn(`${propiedad} id ${idIMDB} no es válido`)
        }
    } 

    validarLength(tituloL, director) {
        if (tituloL.length < 100 && director.length < 50) {
            return true;
        } else {
            console.warn(`Titulo ${tituloL} debe tener menos de 100 letras y director ${director} menos de 50 letras`)
        }
    }

    validarAnioEstreno (anioEstreno) {
        if (typeof anioEstreno === 'number' && anioEstreno.toString().length === 4) {
            return true
        }else {
            console.warn(`Año de estreno debe ser un numero de 4 digitos: ${anioEstreno}`)
        }
    }

    validateArrays(propiedad, arr1,arr2) {
        if (!arr1) return console.warn(`Valor ${this.originCountry} ${arr1} vacio`)
        if (!arr2) return console.warn(`valor ${arr2} vacio`)
        if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
            return console.log(`${arr1} o ${arr2} no son ${propiedad}`)
        } else {
            return true;
        }
    }
    validateGenderCountry(originCountry, genero){
        const generos = ["Terror", "Acción", "Romance"]
        if(!this.validateArrays("Arreglo", originCountry, genero)){
            return console.warn(`${originCountry} o ${genero} no son arreglos`)
        }else if (!(generos.includes(...genero))) {
            console.log("Genero invaldo") 
        }
    }
    validarCal (calificacionenIMBD){
        if (typeof calificacionenIMBD !== 'number') {
            console.warn(`${calificacionenIMBD} no es un numero`)
        }else if (calificacionenIMBD < 0 || calificacionenIMBD > 10) {
            console.warn(`${calificacionenIMBD} no está entre el limite establecido (1-10)`)
        }
    } 
    //[] {}  
}
const myMovie = new Pelicula("ee3333333", "Rambo", "Chnachito", 1919, ["México","Canadá"], ["Romance", "Anime"], 10);
console.log(myMovie)

