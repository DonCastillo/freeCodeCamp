/**
 * Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
 */

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
	// Only change code below this line
	const newArray = arr.slice();
	return newArray.sort((a, b) => {
        return a - b;
    });
	// Only change code above this line
}
const sorted = nonMutatingSort(globalArray);
console.log(globalArray);
console.log(sorted);
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
console.log(nonMutatingSort([140000, 104, 99]));