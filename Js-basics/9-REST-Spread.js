///Rest

function sumar(a,b,...c){
    let result = a + b;

    c.forEach(function(n){ //Recorre C como un arreglo y guarda el valor en N
        console.log("N = ", n);
        result += n //result = result + n
    });
    return result;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));

console.log("***Spread***");
//Operador de propagación

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,10];

console.log(arr1,arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);
