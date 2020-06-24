// here's the function to edit...

function processQuery(query) {
	if (query.includes("Romeo")) {
		return "William Shakespeare";
	}
	return "";
}

module.exports = {
	processQuery : processQuery
}