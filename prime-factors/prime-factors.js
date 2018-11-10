export const primeFactors  = (source) => {
	let factor, factors = [], number = source;

	while (number > 1) {
		factor = getFactor(number);
		number = number / factor;
		factors.push(factor);
	}

	return factors;
	
}


const getFactor = (number) => {

	// it is true that every composite number has a prime factor less than or equal to its square root.
	for (let factor = 2; factor <= Math.sqrt(number); factor++) {
		if(number % factor === 0) {
			return factor
		}
	}

	return number;
}
