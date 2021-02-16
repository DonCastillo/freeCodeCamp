/**
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 * Note: You have to use the arguments object.
 */

function destroyer(arr) {
    let newArray = [];
    const [arr1, ...arr2] = arguments;

    let i = 0;
    newArray = arr1.slice();

    while(i < arr2.length) {
        newArray = newArray.filter(item => item !== arr2[i]);
        i++;
    }

	return newArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
