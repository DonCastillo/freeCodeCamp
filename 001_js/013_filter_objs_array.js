/**
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {
	var arr = [];

    // Only change code below this line
	let sourceKeys = Object.keys(source);

	for (const c of collection) {
		let proceed = false;
		for (const sk of sourceKeys) {
			if (c.hasOwnProperty(sk)) {
				if (c[sk] === source[sk]) {
					proceed = true;
				} else {
					proceed = false;
					break;
				}
			} else {
				proceed = false;
				break;
			}
		}
		if (proceed) {
			arr.push(c);
		}
	}

	// Only change code above this line
	return arr;
}

let a = whatIsInAName([{ first: "Romeo", last: "Montague" },{ first: "Mercutio", last: null },{ first: "Tybalt", last: "Capulet" },],{ last: "Capulet" });

console.log(a);

a = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })

console.log(a);

a = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });

console.log(a);

