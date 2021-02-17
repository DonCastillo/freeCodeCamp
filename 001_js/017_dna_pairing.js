/**
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 *
 *      A => T
 *      T => A
 *      C => G
 *      G => C
 */

function pairElement(str) {
	function getOpposite(x) {
		switch (x) {
			case "A":
				return "T";
			case "T":
				return "A";
			case "C":
				return "G";
			case "G":
				return "C";
		}
	}
	let dnaArray = str.split("");
	let pairing = [];

	for (const d of dnaArray) {
		pairing.push([d, getOpposite(d)]);
	}
	return pairing;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("CTCTA"));
