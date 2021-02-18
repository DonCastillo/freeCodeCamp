/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */

function smallestCommons(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	let multiple = max;

	function isMultiple(x) {
		for (let i = min; i <= max; ++i) {
			if (x % i !== 0) {
				return false;
			}
		}
		return true;
	}

	while (!isMultiple(multiple)) {
		multiple += max;
	}

	return multiple;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([10, 2]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([1, 18]));
