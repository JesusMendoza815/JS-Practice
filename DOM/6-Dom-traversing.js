const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);//recorre los elementos hijos de $cards
console.log($cards.children[2]);//selecciona el elemento en al posición 2 de $cards
console.log($cards.parentElement);//selecciona el elemento padre de $cards que es <nav></nav>
console.log($cards.firstElementChild);//selecciona el primer elemento de la collection $cards
console.log($cards.lastElementChild);//selecciona el ultimo el elemento de la collection $cards
console.log($cards.nextElementSibling);//selecciona elemento hermano posterior a $cards
console.log($cards.previousElementSibling);
console.log($cards.closest("div")); //search the nearest ancestor of type defined in closets("")  
console.log($cards.closest("body"));
console.log($cards.children[2].closest("section"));