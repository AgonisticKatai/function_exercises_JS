// Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:
// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

function encodeWord(code) {
	code = code.replace(/t/g, 7).replace(/a/g, 4).replace(/s/g, 5).replace(/o/g, 0)
	return code
}
encodeWord('tititahahagshshshororo')