/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

function sumFibs(num) {
	function fiboArray(x) {
		let a = [];
		let prevprev = 1,
			prev = 1;
		let sum = 0;
		let counter = 1;

		while (sum < x) {
			if (counter === 1 || counter === 2) {
				a.push(1);
			} else {
				sum = prevprev + prev;
				a.push(sum);
				prevprev = prev;
				prev = sum;
			}
			counter++;
		}
		return a;
	}

	let finalArray = fiboArray(num).filter((y) => y <= num && y % 2 === 1);
	let sum =
		finalArray.length === 0
			? 1
			: finalArray.reduce((acc, cur) => acc + cur);
	return sum;
}

console.log(sumFibs(4));
console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
