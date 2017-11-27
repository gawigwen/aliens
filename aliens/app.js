var r = 1000
var g = 8000
var b = 1000
var x = 5000
var y = 7000
var z = 3000

function totalaliens(red, green, blue){
	return red + green + blue;
}
var total = totalaliens(r,g,b)
console.log(total)

function greenaliens(red, green, blue){
	if(x < green){
		return "MOTHER OF GOD, not the green ones"
	}
}
var rip = greenaliens(r, g, b)
console.log(rip)

function redgreen(red, green, blue){
	if (y < (red + green)){
		return "DOOM!"
	}
}

var rekt = redgreen(r, g, b)
console.log(rekt)

function bluered(red, green, blue){
	if (z > (blue + red)){
		return "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!"
	}
}
var ez = bluered(r, g, b)
console.log(ez)