/*----MY SOLUTION----
function countingSort(arr) {


}
*/

/*=====CLASS DISCUSSION=====*/
function countingSort(arr) {
	// Create a new container of size k
	// k = largest value
	let k = 100; // Based on constraints of problem
	for (let i of arr) {
		if (arr[i] > k) {
			k = arr[i];
		}
	}
	console.log(`max value is ${k}`);
	const counts = Array(k).fill(0);

	// Loop through array, updating counts at each index
	for (let i of arr) {
		counts[i] += 1;
	}

	// return counts
	return counts;
}

/*---TEST RUN----*/
myArr = [];
countingSort(myArr);
