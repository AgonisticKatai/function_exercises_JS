// Integer Numbers Range
// Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

function integrers(a, b) {
	for (var i = a + 1; i < b; i++) {
		if (b < a) {
			console.log(-1)
		} else {
			console.log(i)
		}
	}
}
integrers(2, 6)