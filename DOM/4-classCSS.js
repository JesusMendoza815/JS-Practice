
const $card = document.querySelector('.card');

$card.classList.add("rotate-45"); //add class
console.log($card.classList.contains("rotate-45"));//verify true or false
$card.classList.remove("rotate-45")//remove class
$card.classList.toggle("rotate-135");//if the class is in, toggle remove it or viceversa 
console.log($card.classList.contains("rotate-135"));
$card.classList.toggle("rotate-135");//here toggel removed the class
console.log($card.classList.contains("rotate-135"));
$card.classList.add("rotate-135", "opacity-80", "sepia");
// $card.classList.remove("rotate-135", "opacity-80", "sepia");

