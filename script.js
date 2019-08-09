var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".button");

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