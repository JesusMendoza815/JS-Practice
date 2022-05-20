function cuadradoCallback(n, callback) {
    setTimeout(() => {
        callback(n, n*n);
    }, 0 | Math.random()*100);
}
//callback hell
cuadradoCallback(0, (value, result) => {
    console.log("INICIA CALLBACK")
    console.log(`Callback ${value}, ${result}`)
    cuadradoCallback(0, (value, result) => {
        console.log(`Callback ${value}, ${result}`)
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback ${value}, ${result}`)
            cuadradoCallback(5, (value, result) => {
                console.log(`Callback ${value}, ${result}`)
            })
        })
    })
})