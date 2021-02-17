/**
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	const first = str.charAt(0);
	const last = str.charAt(str.length - 1);
	let index = alphabet.indexOf(first);

	while (index <= alphabet.indexOf(last)) {
		let char = alphabet.charAt(index);
		if (!str.includes(char)) {
			return char;
		}
		index++;
	}

	return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
