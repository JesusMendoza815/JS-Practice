let texto = "Ponte a prácticar pedazo de 💩"

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto)