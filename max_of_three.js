// maxOfThree() function
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(a, b, c) {
	if(a > b && a > c) {
		console.log(a)
	} else if(b > a && b > c) {
		console.log(b)
	} else {
		console.log(c)
	}
}
maxOfThree(2, 4, 70)