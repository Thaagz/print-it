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

let tabIndex = 0;
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");
const bannerImage = document.getElementById("banner-img");
const bannerText = document.getElementById("banner-text");
const dots = document.getElementById("dots");

arrowLeft.addEventListener("click", slideToLeft);
arrowRight.addEventListener("click", slideToRight);

function slideToLeft() {
	tabIndex--;
	updateBanner();
}

function slideToRight() {
	tabIndex++;
	updateBanner();
}

function updateBanner() {
	if(tabIndex<0) {
		tabIndex = slides.length-1;
	}
	if(tabIndex>slides.length-1) {
		tabIndex = 0;
	}
	bannerText.innerHTML = slides[tabIndex].tagLine;
	bannerImage.src = "./assets/images/slideshow/" + slides[tabIndex].image;
	dotSelected();
}

function goToSlide(e){
	tabIndex = e.target.getAttribute("slide");
	updateBanner();
}

function dotSelected() {
	Array.from(document.querySelectorAll('.dots .dot')).forEach(
		(el) => el.classList.remove('dot_selected')
	  );

	let dotSelected = document.querySelectorAll('[slide="' + tabIndex + '"]');
	dotSelected[0].classList.add("dot_selected");
	console.log(dotSelected);
}

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	dot.setAttribute("slide",i);
	dot.addEventListener("click", goToSlide);
	dots.appendChild(dot);
}

updateBanner();