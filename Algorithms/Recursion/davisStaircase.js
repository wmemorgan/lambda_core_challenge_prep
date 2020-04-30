/**
Technical Coaching Assignment:
https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem
 **/

function stepPerms(n, cache = {}) {
	/*---Base Case Check---*/
	// Check remaining base case options
	if (n === 1) {
		return 1;
	} else if (n === 2) {
		return 2;
	} else if (n === 3) {
		return 4;
	}

	// Check if results of 'n' is in cache
	else if (cache.hasOwnProperty(n)) {
		return cache[n];
	}

	/*---Algorithm---*/
	// Recursively calculate step combinations and save to cache
	cache[n] =
		stepPerms(n - 3, cache) + stepPerms(n - 2, cache) + stepPerms(n - 1, cache);
	console.log(`current cache: `, cache);

	return cache[n];
}

stepPerms(5);

