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

// Eventlisteners des flèches du slider

let listArrows = document.querySelectorAll('.arrow');

for (let i=0; i<listArrows.length; i++) {
let thisArrow = listArrows[i]
console.log(thisArrow)

thisArrow.addEventListener( "click", (event) =>{
	myArrow = event.target
	console.log (`clic sur ${myArrow.alt}`)
})
}

// ________ SLIDER
function displaySlider(){
	for (let i=0; i<slides.length; i++) {
		imgSlide = imgPath+slides[i].image;
		pslide = slide[i].tagline;
	}	
}
displaySlider()