var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var random = document.getElementById("random");
var body = document.querySelector("body");



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function updateBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	var newStyle = document.createTextNode(body.style.background + ';');

	var items = css.childNodes;
	if(items.length === 0) {
		css.appendChild(newStyle);
	}
	else
	{
		css.replaceChild(newStyle,items[0]);
	}
}

function randomizeColors() {

	var numbers = [0, 0, 0, 0, 0, 0];
	for(var i = 0; i < 6; i++)
	{
		numbers[i] = getRndInteger(0, 255);
	}
	color1.value = "#" + ("0" + numbers[0].toString(16)).substr(-2) + ("0" + numbers[1].toString(16)).substr(-2) + ("0" + numbers[2].toString(16)).substr(-2);
	color2.value = "#" + ("0" + numbers[3].toString(16)).substr(-2) + ("0" + numbers[4].toString(16)).substr(-2) + ("0" + numbers[5].toString(16)).substr(-2);

	updateBackground();
}

updateBackground();

color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
random.addEventListener("click", randomizeColors);