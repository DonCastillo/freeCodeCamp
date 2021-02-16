/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arr) {
	if (arr.length == 2) {
		let newArray = [];
		let [a, b] = arr.sort((a, b) => a - b);

		do {
			newArray.push(a);
			a++;
		} while (a <= b);

        // return newArray;
		return newArray.reduce((acc, curr) => acc + curr);
	} else {
		return 0;
	}
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
