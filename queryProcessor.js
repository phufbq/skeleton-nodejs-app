// here's the function to edit...

function processQuery(query) {
	if (query.includes("Romeo")) {
		return "William Shakespeare";
	}
	else if (query.includes("plus")) {
		var words = query.split(" ");
		var int1 = words[2]
		var int2 = words[4]
		return int1 + int2;
	}
	else if (query.includes("what is your name")) {
		return "Phil"
	}
	else return "";
}

module.exports = {
	processQuery : processQuery
}