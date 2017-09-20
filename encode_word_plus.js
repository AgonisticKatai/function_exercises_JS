// Improve the previous function to add a random number between 0 and 1000 every 7 characters

function encodeWord(code) {
	code = code.replace(/t/g, 7)
	code = code.replace(/a/g, 4)
	code = code.replace(/s/g, 5)
	code = code.replace(/o/g, 0)
	var randomNumber = Math.floor(Math.random() * 1000)
	return code
}
encodeWord('tititahahagshshshororo')