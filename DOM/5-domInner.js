const $whatIsDom = document.getElementById("que-es");
let text = `<b>Hola mundo</b>
            <h1>Que tal</h1>
            <mark>jsjsjsjs</mark>`;
$whatIsDom.textContent = text; //agrega text como sólo texto
$whatIsDom.innerHTML = text;//agrega text respetando etiquetas html
$whatIsDom.outerHTML = text;//reemplaza toda el elemento dom original por el inclido en text