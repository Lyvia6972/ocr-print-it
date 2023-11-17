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

 //____________________Recuperatioin des elements html_________________________________
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const imageBanner = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");
const conteneurDots = document.querySelector(".dots");


//_____________________Initialisation et ajout des points sur la diapo__________________

// Initialisation de l'index de la diapo
let indexDiapo = 0;


// Affichage des points avec le point blanc initialisé sur l'index de la diapo
for (let i = 0; i < slides.length; i++) {
	
	let blackDot = document.createElement("div");

	blackDot.classList.add("dot");

	conteneurDots.appendChild(blackDot);

	if (i === indexDiapo) {
		blackDot.classList.add("dot_selected");	
	}
}

//__________________Changement des points sélectionnés en fonction de l'index de la diapo_________________________ 

function nextDotSelected() {

	let totalDots = document.querySelectorAll(".dot");

	for (let i = 0; i < totalDots.length; i++){
		const dot = totalDots[i];

		if (i === indexDiapo){
			dot.classList.add("dot_selected");
		}else {
			dot.classList.remove("dot_selected");
		}
	}
}

//________________Changement de l'image de la diapo et du texte en fontion de l'index de le diapo ______________

function displaySlide(){
	imageBanner.src = "assets/images/slideshow/" + slides[indexDiapo].image;
	text.innerHTML = slides[indexDiapo].tagLine;
}



//________________Ajout de l'évènement click sur les flèches gauche et droite_____________________

arrowRight.addEventListener("click", () => {
	if (indexDiapo === slides.length - 1){
			indexDiapo = 0;
	} else {
		indexDiapo = indexDiapo + 1;
	}
	displaySlide()
	nextDotSelected();
});

arrowLeft.addEventListener("click",() =>{
	if (indexDiapo === 0) {
		indexDiapo = slides.length - 1;
	} else {
		indexDiapo = indexDiapo - 1;
	}
	displaySlide()
	nextDotSelected();
});