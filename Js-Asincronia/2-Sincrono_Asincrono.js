//Codigo sincrono Bloqueante
(()=>{
    console.log(`Código Sincrono`)
    console.log(`***INICIo***`)

    function dos () {
        console.log(`Dos`);
    }

    function uno () {
        console.log(`Uno`);
        dos();
        console.log(`Tres`);
    }

    uno();

    console.log(`***FIN***`)
})();


//CODIGO ASINCRONO NO BLOQUEANTE 
(() => {
    console.log(`Codigo ASINCRONO`)
    console.log(`***INICIO***`)

    function dos() {
        setTimeout(() => {
            console.log("Dos")
        },1000)
    }

    function uno () {
        setTimeout(() => {
            console.log("Uno")
        },0);
        dos();
        console.log("Tres")
    }
    uno();
    console.log(`***FIN***`)
})();