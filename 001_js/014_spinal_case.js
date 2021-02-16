/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
	let newString = "";
	for (const s of str) {
		if (s.match(/[A-Z]/)) {
			newString += " ".concat(s);
		} else {
			newString += s;
		}
	}
	newString = newString
                .split(/[\W|_]/)
                .filter((c) => c !== "")
                .join("-")
                .toLowerCase();
	return newString;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("The_Andy_Griffith_Show"));
