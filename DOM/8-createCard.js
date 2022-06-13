const $cards = document.querySelector(".card"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Personas",
            img: "https://placeimg.com/200/200/woman"
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        },
    ];

cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent= el.title;

    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);