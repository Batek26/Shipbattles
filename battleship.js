var randloc = Math.floor(Math.random()*5);
console.log(randloc);
var location1 = randloc;
var location2 = randloc + 1;
var location3 = randloc + 2;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	
	guess = prompt('Let`s go! (choose number from 0-6):');

	if(guess < 0 || guess > 6){
		alert('Wrong number! Are you an idiot!?');
	}else{
		guesses = guesses + 1;

		if(guess == location1 || guess == location2 || guess ==location3){
			alert('Oh no! You`ve hit my ship!');
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert('Congratulate, you`re win. Are you proud of yourself?');
			}
		}else{
			alert('HAHAHA! You`ve missed, DUMMY!');
		}
	}
}
var efficiency = (3/guesses)*100;
var stats = "To beat me you needed: " + guesses + ", so your efficiency is: " + efficiency + "%";
document.getElementById('results').innerHTML = stats;