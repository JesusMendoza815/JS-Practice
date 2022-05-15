function cuadradoPromises(value) {
    if (typeof value !== "number") return Promise.reject(`ERROR, ${value} is not a number`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 1000);
    });
}

// cuadradoPromises(0)
// .then((obj) => {
//     console.log('INCIO Promise')
//     console.log(`Cuadrado de ${obj.value}: ${obj.result}`)
//     return cuadradoPromises(5)
// })
// .then((obj) => {
//     console.log(`Cuadrado de ${obj.value}: ${obj.result}`)
//     return cuadradoPromises(10)
// })
// .then((obj) => {
//     console.log(`Cuadrado de ${obj.value}: ${obj.result}`)
//     return cuadradoPromises("g")
// })
// .catch(err => console.error(err));

async function cuadradoAsincronaDeclarada() {
    try {
        console.log(`INICIA ASYNC FUNCTION`)

        let obj = await cuadradoPromises(0)
        console.log(`Async Function ${obj.value}: ${obj.result}`)

        obj = await cuadradoPromises(5)
        console.log(`Async Function ${obj.value}: ${obj.result}`)

        obj = await cuadradoPromises("sf")
        console.log(`Async Function ${obj.value}: ${obj.result}`)
    } catch (err) {
        console.error(err)
    }
}
cuadradoAsincronaDeclarada();

const cuadradoAsincronaExpresada = async () => {
    try {
        console.log(`INICIA ASYNC FUNCTION EXPRESADA`)

        let obj = await cuadradoPromises(10)
        console.log(`Async Function ${obj.value}: ${obj.result}`)

        obj = await cuadradoPromises(15)
        console.log(`Async Function ${obj.value}: ${obj.result}`)

        obj = await cuadradoPromises("Expreasada")
        console.log(`Async Function ${obj.value}: ${obj.result}`)
    } catch (err) {
        console.error(err)
    }
}
cuadradoAsincronaExpresada();