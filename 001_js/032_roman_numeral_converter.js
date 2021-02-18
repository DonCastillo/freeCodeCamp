/**
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
	function romanize(x) {

        function getSymbol(iter, adder, mid, next){
			if (iter === 9) return adder + next;
			else if (iter > 5) return mid + adder.repeat(Math.abs(5 - iter));
			else if (iter === 4) return adder + mid;
			else if (iter === 5) return mid;
			else return adder.repeat(iter);
        }

		if (x % 1000 === 0) {
			return getSymbol(x/1000, "M", "", "")
		}

		if (x % 100 === 0) {
			return getSymbol(x/100, "C", "D", "M")
		}

		if (x % 10 === 0) {
			return getSymbol(x/10, "X", "L", "C")
		}

		if (x % 1 === 0) {
			return getSymbol(x, "I", "V", "X")
		}
	}

	const base = [1, 10, 100, 1000];
	let a = num.toString().split("").reverse();

	let b = [];
	for (let i = 0; i < a.length; ++i) {
		b.push(romanize(a[i] * base[i]));
	}
	b = b.reverse().join("");
	return b;
}

console.log(convertToRoman(1));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
