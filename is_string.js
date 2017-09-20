// Define a function called ​isString​ that receives a value and return true if the value received is a string

function isString(argument) {
	if (typeof(argument) === typeof('')) {
		return true
	} else {
		return false
	}
}
isString('4')