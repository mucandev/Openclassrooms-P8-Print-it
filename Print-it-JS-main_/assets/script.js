// tableau des slides
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
// nombre de slides
console.log(`il y a ${slides.length} slides`)
console.log(slides[0].image)

// ________ VARIABLES GLOBALES
let imgSlide = document.querySelector('.banner-img src');
let pSlide = document.querySelector('#banner p');
let imgPath =  "./assets/images/slideshow/"
let index = 0;


// Eventlisteners des flèches du slider
let arrowLeft = document.querySelector('.arrow_left');
console.log(arrowLeft)
arrowLeft.addEventListener("click",() => {console.log(`clic sur ${arrowLeft.alt}`)});

let arrowRight = document.querySelector('.arrow_right');
console.log(arrowRight)
arrowRight.addEventListener("click", () => {console.log(`clic sur ${arrowRight.alt}`)});


// ________AJOUTER DES BULLETS POINTS AU SLIDER
let bulletsDiv = document.querySelector('.dots');

function displayBulletsSlider(){
	for (let i=0; i<slides.length; i++) {
		const bullet = document.createElement("p");			// créer la balise pour bullet
		bullet.classList.add("dot");									// Ajouter la classe "dot" au bullet
		bulletsDiv.appendChild(bullet);                              // situer le parent du nouvel élément 
		if (i==index){
		bullet.classList.add("dot_selected");						// Ajouter la classe "dot selected" au bullet
		}
	}	
}
displayBulletsSlider()