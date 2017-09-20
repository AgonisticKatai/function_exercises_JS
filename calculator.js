// Calculator
// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameter

function calculator(operator, b, c) {
	if (operator === 'suma') {
		return b + c
	} else if (operator === 'resta') {
		return b - c
	} else if (operator === 'multiplicacion') {
		return b * c
	} else if (operator === 'division') {
		return b / c
	}
}
calculator('suma', 4, 8)