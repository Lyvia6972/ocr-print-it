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
const imageBanner = document.querySelector(".banner-img");
const text = document.querySelector('p');
const conteneurDots = document.querySelector(".dots");

let counter = 0;
// Vérification que la flèche gauche est interactive
arrowLeft.addEventListener("click", () => {
	console.log("Je clique à gauche");
});

// Vérification que la flèche droite est interactive
arrowRight.addEventListener("click", () => {
	alert("Je clique à droite");
	// if (counter == slides.length -1) {
	// 	counter = 0;
	// } else {
	// 	counter = counter + 1;
	// }
	// console.log(counter)
	
	
});


//_______________Déclaration et ajout des points sur la diapo__________________

// Initialisation de l'index de la diapo
let indexDiapo = 0;


// tant que i est inférieur à la totalité des bulles, on ajoute 1 à i
for (let i = 0; i < slides.length; i++) {
	
	// création d'une nouvelle div pour les points non selectionnés
	let blackDot = document.createElement("div");

	// Cette nouvelle div correspond à la classe .dot qui s'affiche en mode list
	blackDot.classList.add("dot");

	// La nouvelle div est l'enfant de .conteneurDots
	conteneurDots.appendChild(blackDot);

	if (i == indexDiapo) {
		blackDot.classList.add("dot_selected");	
	}

}

// _____________Changement des points sélectionnés en fonction de l'index de la dapo_________________________ 

function nextDotSelected() {

	let totalDots = document.querySelectorAll(".dot");

	// for (let i = 0; i < totalDots.length; i++){
		
	// 	totalDots[i].classList.remove("dot_selected");
		
	// 	if (i == indexDiapo){
	// 		totalDots[i].classList.add("dot_selected");
	// 	}
	// }

	for (let i = 0; i < totalDots.length; i++){

	if (i == indexDiapo){
		totalDots[i].classList.add("dot_selected");
	}else {
		totalDots[i].classList.remove("dot_selected");
	}
}
}

// _____________Changement de l'image de la diapo et du texte en fontion de l'index de le diapo ______________

arrowRight.addEventListener("click", () => {
	if (indexDiapo == slides.length - 1){
			indexDiapo = 0;
	} else {
		indexDiapo = indexDiapo + 1;
	}
	imageBanner.src = "assets/images/slideshow/" + slides[indexDiapo].image;
	text.innerHTML = slides[indexDiapo].tagLine;

//appelle de la fonction pour que le changement de points se fasse
	nextDotSelected();
}
);

arrowLeft.addEventListener("click",() =>{
	if (indexDiapo == 0) {
		indexDiapo = slides.length - 1;
	} else {
		indexDiapo = indexDiapo - 1;
	}
	imageBanner.src = "assets/images/slideshow/" + slides[indexDiapo].image;
	text.innerHTML = slides[indexDiapo].tagLine;
	
	nextDotSelected();
})