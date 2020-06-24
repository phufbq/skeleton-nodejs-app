// here's the function to edit...

function processQuery(query) {
	if (query.includes("Romeo")) {
		return "William Shakespeare";
	}
	else if (query.includes("What is 6 plus 3")) {
		return 9;
	}
	else if (query.includes("what is your name")) {
		return "Phil"
	}
	else return "";
}

module.exports = {
	processQuery : processQuery
}