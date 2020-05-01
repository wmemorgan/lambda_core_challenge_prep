/*
 * Technical Coaching: Big O
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

function lengthOfLongestSubstring(s) {
	// create a map of letters that we run across
	let charMap = new Set();
	// we have start index and an end
	let start = 0;
	let end = 0;
	let maxIndex = 0;
	// while loop -> when our end counter is == len(string)
	while (end < s.length) {
		// what if we find a duplicate as our str[end]
		if (charMap.has(s[end])) {
			// delete the element[start] from the map
			charMap.delete(s[start]);
			console.log(`delete ${s[start]} charMap now: `, charMap);
			// increment our start index
			start++;
		} else {
			// add the char to the map
			charMap.add(s[end]);
			console.log(`add ${s[end]} charMap now: `, charMap);
			// increment end
			end++;
			// compare with max to see what's bigger
			console.log(`end - start ${end - start}`);
			maxIndex = Math.max(maxIndex, end - start);
			console.log(`maxIndex is ${maxIndex}`);
		}
	}

	return maxIndex;
}

s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
