var r = 1000
var g = 8000
var b = 1000
var x = 1000

function totalaliens(red, green, blue){
	return red + green + blue;
}
var total = totalaliens(r,g,b)
console.log(total)

function aliens(red, green, blue){
	if(x > green){
		return "MOTHER OF GOD, not the green ones"
	}else if(x > (red+green)){
		return "DOOM!"
	}else if(x < (blue+red)){
		return "We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!"
	}
}
var why = aliens(r, g, b)
console.log(why)
