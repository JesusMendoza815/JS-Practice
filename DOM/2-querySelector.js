console.log(document.querySelector(".link-dom")) //get the atributte
console.log(document.querySelector(".link-dom").href) //get the api url
console.log(document.querySelector(".link-dom").getAttribute("href")) //get the atributte reference


document.documentElement.lang = "en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//const? yes, const only block the value change in primitive
//if you want to save a variable with DOM reference use $varName at start 
const $linkDOM = document.querySelector(".link-dom");

//will open a new window with href specified
$linkDOM.setAttribute("target", "_blank");
//good practice fot html markup
$linkDOM.setAttribute("rel", "noopener");
//modify or add the key , value
$linkDOM.setAttribute("href", "http://google.com");
//remove atributte
$linkDOM.removeAttribute("rel")

console.log($linkDOM.hasAttribute("rel"))

//Data Atributtes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto de Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Cambiando el valor directamnete";
console.log($linkDOM.dataset.description);

