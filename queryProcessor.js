// here's the function to edit...

function processQuery(query) {
	if (query.includes("Romeo")) {
		return "William Shakespeare";
	}
	else if (query.includes("plus")) {
		var words = query.split(" ");

		var results = new Array();
		for (i = 0; i < numbers.length; i++) {
			if(isNumber(numbers[i])) {
				results.push(numbers[i])
			}
		}

		var sum = results.reduce(function(a, b){
			return a + b;
		}, 0);

		return sum;
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
	else if (query.includes("prime")) {
		var numbers = subStrAfterChars(query, ':').split(",")

		var results = new Array();
		for (i = 0; i < numbers.length; i++) {
			if(isPrime(numbers[i])) {
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

function isNumber(item) {
  return Number(item);
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

function isPrime(n) {

	// If n is less than 2 or not an integer then by definition cannot be prime.
	if (n < 2) {return false}
	if (n != Math.round(n)) {return false}
 
	// Now assume that n is prime, we will try to prove that it is not.
	var isPrime = true;
 
	// Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
	for (var i = 2; i <= Math.sqrt(n); i++) {
	   if (n % i == 0) {isPrime = false}
	}
 
	// Finally return whether n is prime or not.
	return isPrime;
 }

module.exports = {
	processQuery : processQuery
}