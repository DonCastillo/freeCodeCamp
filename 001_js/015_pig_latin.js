/**
 * Pig Latin is a way of altering English Words. The rules are as follows:
 * - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
 * - If a word begins with a vowel, just add "way" at the end.
 * Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
	const vowel = /^[aeiou]/;

	if (str.charAt(0).match(vowel)) {
		return str.concat("way");
	} else {
		let sI = 0,
			eI = -1;
		for (const c of str) {
			if (!c.match(vowel)) {
				eI++;
			} else {
				break;
			}
		}
		return str.slice(eI + 1).concat(str.substring(sI, eI + 1), "ay");
	}
}

translatePigLatin("consonant");

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("schwartz"));
