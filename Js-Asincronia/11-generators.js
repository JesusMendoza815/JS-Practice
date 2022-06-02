function* iterable() {
    yield "Hola"
    console.log("LOG")
    yield "Hola 2"
    console.log("LOG2")
    yield "Hola 3"
}

let iterador = iterable()
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())

for (const i of iterador) {
    console.log(i);
}