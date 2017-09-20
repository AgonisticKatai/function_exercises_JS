// Implementar otra solución en la que obtengamos el comportamiento deseado de la función callMe sin necesidad de usar la función intermedia getCallMe...

var callMe = function() {
	var numCalls = 0
	return function() {
		return ++numCalls
	}
}()

function callMe() {
	var numCalls = 0
	callMe = function() {
		return ++numCalls
	}
	return callMe()
}
callMe()