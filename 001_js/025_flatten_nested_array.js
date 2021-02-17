/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
	return arr
		.join()
		.split(",")
		.filter((x) => x.length > 0)
		.map((x) => {
			if (!isNaN(parseInt(x))) {
				return parseInt(x);
			} else if (x === "[object Object]") {
				return {};
			} else {
				return x;
			}
		});
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
