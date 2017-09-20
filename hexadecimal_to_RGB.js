// Hexadecimal

function getRGB(hexColor) {
	var redHex = hexColor.substring(1, 3)
	var greenHex = hexColor.substring(3, 5)
	var blueHex = hexColor.substring(5, 7)

	var redDec = parseInt(redHex, 16)
	var greenDec = parseInt(greenHex, 16)
	var blueDec = parseInt(blueHex, 16)

	return 'rgb(' + redDec + ',' + greenDec + ',' + blueDec + ')'
}
getRGB('#00ff00')