// Calculation
// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

var sumNumbers = [];
var sum = 0;
function multiples() {
	for (var i = 23; i < 500; i++) {
		console.log(i);
		sumNumbers.push(i);
		i += 23
	}
	sumNumbers.forEach(function(number) {
		sum += number
	})
	console.log(sum)
}
multiples()