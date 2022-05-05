//funciones anónimas autoejecutables

(function(){
    console.log("Hola");
})();

(function(d, w, c){
    console.log(d);
    console.log(w);
    c.log("Yo soy console con alias c");
})(document, window, console);