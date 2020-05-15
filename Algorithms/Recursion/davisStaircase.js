/**
Technical Coaching Assignment:
https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
 **/

 /*----MY SOLUTION----*/
// function stepPerms(n, cache = {}) {
// 	/*---Base Case Check---*/
// 	// Check remaining base case options
// 	if (n === 1) {
// 		return 1;
// 	} else if (n === 2) {
// 		return 2;
// 	} else if (n === 3) {
// 		return 4;
// 	}

// 	// Check if results of 'n' is in cache
// 	else if (cache.hasOwnProperty(n)) {
// 		return cache[n];
// 	}

// 	/*---Recursive Relation---*/
// 	// Recursively calculate step combinations and save to cache
// 	cache[n] =
// 		stepPerms(n - 3, cache) + stepPerms(n - 2, cache) + stepPerms(n - 1, cache);
// 	console.log(`current cache: `, cache);

// 	return cache[n];
// }

/*----CLASS DISCUSSION----*/
// Memoization approach
let memo = {}
function stepPerms(n) {
	// Idea 2
	// If we have 0 steps left (this means that we lnaded _exactly_ on the landing [ending], then there is 1 way to go about this)
	// If we have < 0 steps left, there are 0 ways to get down from there
	if(memo.hasOwnProperty(n)) return memo[n]

	if (n < 0) {
		return 0;
	}

	if (n === 0) {
		return 1
	}
	// When we actually do the recursive relation, we want to 
	// call stepPerms on n-1, n-2, n-3
	// add all of the options for n-1, and n-2, and n-3
	memo[n] = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);

	return memo[n]
} 
// Idea 1
// If we have 1, there is 1 way
// If we have 2, there are 2 ways
// If we have 3, there are 4 ways


// stepPerms(3)
// stepPerms(2) + stepPerms(1) + stepPerms(0)
// stepPerms(1) + stepPerms(0) + stepPerms(-1)
// stepPerms(0) ______________


/*-----TEST CASE----*/
const steps = 5
console.log(stepPerms(steps));

