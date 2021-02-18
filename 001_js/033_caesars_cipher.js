/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let decoded = str
		.toLowerCase()
		.split("")
		.map((char) => {
			if (!char.match(/\W|_/)) {
				let charIndex = alphabet.indexOf(char);
				let newIndex = charIndex - 13;
				newIndex =
					newIndex > -1 ? newIndex % 26 : 26 - Math.abs(newIndex);
				return alphabet.charAt(newIndex).toUpperCase();
			}
			return char;
		});
	return decoded.join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR YBIR?"));
