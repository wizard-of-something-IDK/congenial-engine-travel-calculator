var wrapper = document.querySelector(".wrapper");
var resultEle = document.querySelector(".result");
var submitEle = document.querySelector(".submit");
var yearly1;
var yearly2;
var yearly3;
var yearly4;
var mpg;

function travelresults() {
	mpg = { a: 12, b: 17, c: 26, d: 29 };
	var miles = prompt(
		"About how many miles did you plan on driving this year? (Numbers only, please!)"
	);
	var cost = prompt(
		"How much is the current cost per gallon of gas? (Numbers only, please!)"
	);

	resultEle.innerHTML = travelcalc(cost, miles, mpg);
}

function travelcalc(cost, miles, mpg) {
	return (
		"To drive a car with a MPG rating of " +
		mpg.a +
		" for " +
		miles +
		" miles at $" +
		cost +
		" per gallon it would cost $" +
		(miles / mpg.a) * cost +
		". <br> To drive a car with a MPG rating of " +
		mpg.b +
		" for " +
		miles +
		" miles at $" +
		cost +
		" per gallon it would cost $" +
		(miles / mpg.b) * cost +
		". <br> To drive a car with a MPG rating of " +
		mpg.c +
		" for " +
		miles +
		" miles at $" +
		cost +
		" per gallon it would cost $" +
		(miles / mpg.c) * cost +
		". <br> To drive a car with a MPG rating of " +
		mpg.d +
		" for " +
		miles +
		" miles at $" +
		cost +
		" per gallon it would cost $" +
		(miles / mpg.d) * cost +
		"."
	);
}

travelresults();

submitEle.addEventListener("click", function () {
	travelresults();
});