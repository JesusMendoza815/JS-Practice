
// const valorAleatorio = Math.round(Math.random()*100 + 5);
 const objUsusarios = {
    [`id_${Math.round(Math.random()*100 + 5)}`]: "Valor aleatorio"
    // [`id_${valorAleatorio}`]: "Valor aleatorio"
};

const usuarios = [`Juan`,`Pedro`,`María`];
usuarios.forEach((usuario, index) => objUsusarios[index] = usuario);

console.log(objUsusarios);