let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.querySelector(".button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomColors);

function randomColors() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ '#' + parseInt(Math.random() * 0xffffff).toString(16) 
	+ ", " 
	+ '#' + parseInt(Math.random() * 0xffffff).toString(16)
	+ ")";
	css.textContent = body.style.background + ";";
}