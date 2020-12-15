const css = document.querySelector("h3");
const leftColor = document.getElementById("color1");
const rightColor =  document.getElementById("color2");
const body = document.getElementById("gradient");
const randomButton = document.querySelector(".button");

leftColor.addEventListener("input", setGradient);
rightColor.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColors);

function setGradient() {
	body.style.background = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;
	css.textContent = body.style.background + ";";
}
setGradient();

function getRandomColor() {
	const randomColor = parseInt(Math.random() * 0xffffff).toString(16);

	if (randomColor.length === 6) {
		return randomColor;
	} else {
		return getRandomColor();
	}
}

function setRandomColors() {
	const left = `#${getRandomColor()}`;
	const right = `#${getRandomColor()}`;

	body.style.background = `linear-gradient(to right, ${left}, ${right})`;
	css.textContent = body.style.background + ";";
	
	leftColor.value = left;
	leftColor.defaultValue = left;
	rightColor.value = right;
	rightColor.defaultValue= right;
}