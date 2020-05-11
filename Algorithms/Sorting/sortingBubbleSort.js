/*
 * Technical coaching assignment for Sorting
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
 */

function countSwaps(a) {
	let numSwaps = 0;
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length - 1; j++) {
			// Swap adjacent elements if they are in decreasing order
			if (a[j] > a[j + 1]) {
				let temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
				numSwaps++;
			}
		}
	}

	const firstElement = a[0];
	const lastElement = a[a.length - 1];
	console.log(`Array is sorted in ${numSwaps} swaps.`);
	console.log(`First Element: ${firstElement} `);
	console.log(`Last Element: ${lastElement} `);
}

const input = [6, 4, 1];
console.log(countSwaps(input));
