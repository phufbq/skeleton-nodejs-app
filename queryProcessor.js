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
	else if (query.includes("Theresa")) {
		return 2016;
	}
	else if (query.includes("Bond")) {
		return 1962;
	}
	else if (query.includes("cube")) {
		var numbers = subStrAfterChars(query, ':').split(",")
		
		var results = new Array();
		for (i = 0; i < numbers.length; i++) {
			if(sqrt(numbers[i]) && cbrt(numbers[i])) {
				results.push(numbers[i])
			}
		}

		return results;
	}

	else if (query.includes("largest")) {
		var words = query.split(" ");
		
		words.forEach(getTheIntegers(x))

	}
	else if (query.includes("what is your name")) {
		return "Phil"
	}
	else return "";
}

fruits.forEach(myFunction);

function getTheIntegers(item, index) {
  
}

function subStrAfterChars(str, char, pos)
{
  if(pos=='b')
   return str.substring(str.indexOf(char) + 1);
  else if(pos=='a') 
   return str.substring(0, str.indexOf(char));
  else
  return str;  
}

function sqrt(x) {
	var result = Math.sqrt(x) 
	return (result % 1 == 0);
}

function cbrt(x) {
	var result = Math.cbrt(x) 
	return (result % 1 == 0);
}

module.exports = {
	processQuery : processQuery
}