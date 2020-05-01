/*
 * Technical coaching assignment for Stacks & Queues
 * https://www.hackerrank.com/challenges/balanced-brackets/problem
 */

/*----MY SOLUTION ATTEMPT 2----*/
function isBalanced(s) {
	// Create open and close bracket arrays
	const openBracket = ["(", "[", "{"];
	const closeBracket = [")", "]", "}"];
	// Initialize stack
	const stack = [];
	// Iterate through string
	for (let i = 0; i < s.length; i++) {
		// If open bracket found
		if (openBracket.includes(s[i])) {
			// Add to stack
			stack.push(s[i]);
			console.log(`add ${s[i]} stack is ${stack}`);
		}
		// If close bracket found
		if (closeBracket.includes(s[i])) {
			// Verify complimentary braces
			if (
				closeBracket.indexOf(s[i]) ===
				openBracket.indexOf(stack[stack.length - 1])
			) {
				// Remove matching open bracket from stack
				const removeOpenBracket = stack.pop();
				console.log(
					`found close bracket ${s[i]} remove ${removeOpenBracket} stack ${stack}`
				);
			} else {
				// Terminate function
				return "NO";
			}
		}
	}
	console.log(`stack is ${stack}`);
	return stack.length === 0 ? "YES" : "NO";
}

/*----MY SOLUTION ATTEMPT 1---
function isBalanced(s) {
  // create a hashtable of braces k.v pair complimentary braces
  const bracketMap = {}
  bracketMap['('] = ')'
  bracketMap['['] = ']'
  bracketMap['{'] = '}'

  // initialize start index at 0
  let start = 0
  // initialize end index at s.length - 1
  let end = s.length - 1
  // loop while start < end
  while (start < end) {
    // look up open bracket in hashtable
    // if NOT complimentary
    if (bracketMap[s[start]] !== s[end]) {
      return 'NO'
    } else {
      // increment start index
      start++
      // decrement end index
      end--
    }
  }

  return 'YES'
}
*/

// s = '{(([])[])[]}' // YES
s = "{(([])[])[]]}"; // NO
console.log(isBalanced(s));
