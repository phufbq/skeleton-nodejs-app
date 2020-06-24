// here's the function to edit...

function processQuery(query) {
	if (query.includes("Romeo")) {
		return "William Shakespeare";
	}
	else if (query.includes("what is your name"))
	return "Phil";
}

module.exports = {
	processQuery : processQuery
}