/**
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
	let index = 0;
	for (const x of arr) {
		if (func(x)) {
			break;
		}
		index++;
	}
	return arr.slice(index);
}

let output = dropElements([1, 2, 3, 4], function (n) {
	return n >= 3;
});
console.log(output);
output = dropElements([0, 1, 0, 1], function (n) {
	return n === 1;
});
console.log(output);
output = dropElements([1, 2, 3, 9, 2], function (n) {
	return n > 2;
});
console.log(output);
