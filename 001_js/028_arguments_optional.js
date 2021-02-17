/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * Calling this returned function with a single argument will then return the sum:
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 * If either argument isn't a valid number, return undefined.
 */

function addTogether(x, y = 0) {
	if (typeof x !== "number" || typeof y !== "number") {
		return undefined;
	}
	if (arguments[1]) {
		return x + y;
	} else {
		return function (z) {
			if (typeof z !== "number") {
				return undefined;
			}
			return x + y + z;
		};
	}
}

console.log(addTogether(2)(3));
console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
