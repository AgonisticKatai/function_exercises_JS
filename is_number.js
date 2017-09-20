// Define a function called ​isNumber​ that receives a value and return true if the value received is a number

function isNumber(argument) {
	if (typeof(argument) === typeof(1)) {
		return true
	} else {
		return false
	}
}
isNumber('4')