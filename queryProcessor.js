// here's the function to edit...

function processQuery(query) {
	if (query.includes("Romeo")) {
		return "William Shakespeare";
	}
	else if (query.includes("plus") || query.includes("multiply")) {
		var words = query.split(" ");
		var int1 = words[2]
		var int2 = words[4]
		return int1 + int2;
	}
	else if (query.includes("multiply")) {
		var words = query.split(" ");
		var int1 = words[2]
		var int2 = words[4]
		return int1 * int2;
	}

	else if (query.includes("largest")) {
		var words = query.split(" ");
		
	}
	else if (query.includes("what is your name")) {
		return "Phil"
	}
	else return "";
}

fruits.forEach(myFunction);

function getTheIntegers(item, index) {
  
}

module.exports = {
	processQuery : processQuery
}