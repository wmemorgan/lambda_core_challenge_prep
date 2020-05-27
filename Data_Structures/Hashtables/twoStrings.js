/**
 * Technical Coaching Lecture: Hashtables
 * https://www.hackerrank.com/challenges/two-strings/problem
 */

function twoStrings(s1, s2) { // Time Complexity: O(n+m) Space Complexity: O(n)
    // create a hashmap to store the characters of s1
    const map = {};
    // loop over s1 to add every character
    for (let char of s1) {
        map[char] = true;
    }

    // loop over s2 and check every character against the hashmap
    for (let char of s2) {
        if (map[char]) {
            return "YES";
        }
    }
    // if it exists in the map, return "YES"

    // return "NO" if we don't find anything
    return "NO";
}

/*----ADVANCED PROBLEM----
What if instead of just telling us if there is a single occurrence,
we instead need to know HOW MANY duplicate substrings there are...
how many unique substrings are shared between the two strings?
*/
/*---Algorithm----*/
// create a counter
// look over s2, and create an array of all possible substrings in s2
// loop over these substrings, and check against the first map
// if we find it?
// remove it from the map
// increment counter
function findMatchingSubstrings(s1, s2) {
    // look at the first string, start at the first, and create a map of all possible substrings in it (a b c ab bc cd abc bcd)
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        for (let j = i + 1; j <= s1.length; j++) {
            map[s1.substring(i, j)] = true;
        }
    }
    console.log(map);

    let counter = 0;
    for (let i = 0; i < s2.length; i++) {
        for (let j = i + 1; j <= s2.length; j++) {
            let substr = s2.substring(i, j);
            if (map[substr]) {
                counter++;
                delete map[substr];
            }
        }
    }

    return counter;
}


console.log(twoStrings("abcd", "abc"));