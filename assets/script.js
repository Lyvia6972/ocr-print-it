const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Vérification que la flèche gauche est interactive
arrowLeft.addEventListener("click", () => {
	console.log("Je clique à gauche");
});

// Vérification que la flèche droite est interactive
arrowRight.addEventListener("click", () => {
	alert("Je clique à droite");
})

//_______________Déclaration et ajout des points__________________

// Initialisation du slide actuelle a 0
let numeroDot = 0;

// La classe .dots est selectionne grace a la creation de la variable conteneurDots
let conteneurDots = document.querySelector(".dots");

// tant que i est inférieur à la totalité des bulles, on ajoute 1 à i
for (let i = 0; i < slides.length; i++) {

	// création d'une nouvelle div
	let blackDot = document.createElement("div");

	// Cette nouvelle div correspond à la classe .dot
	blackDot.classList.add("dot");

	// La nouvelle div est l'enfant de .conteneurDots
	conteneurDots.appendChild(blackDot);


if (i === numeroDot)blackDot.classList.add("dot_selected");	
}

