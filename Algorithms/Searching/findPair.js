/*---My Solution---*/
// Time Complexity: O(n)
// Space Complexity: O(n)
function pairs(k, arr) {
    // Track the number of pairs
    let numPairs = 0
    // Create a hash table of array elements for the keys
    const numMap = {}
    for (let num of arr) {
        // and the difference between the key 
        // and the target value as the value
        numMap[num] = num - k
    }

    // Iterate through the hash table and lookup the value of each property
    // in the hashtable
    for (let property in numMap) {
        // if value found increment number of pairs
        if (numMap.hasOwnProperty(numMap[property])) {
            numPairs++
        }
    }

    // after iteration return the number of pairs
    return numPairs

}

/*=====Class Discussion====*/
/*---OPTION 2---*/
// turn the array into a hashmap
function pairs(k, arr) {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = true
    }

    let answer = 0

    // loop over the array
    for (let val of arr) {
        let diff = val - k

        if (map[diff]) {
            answer++
        }

    }

    // arr[i] - what we want = diff
    // arr[i] - diff = what we want
    // item - diff = what we want
    // if it exits, then increment
    // we then look it up in our hashmap

    // time - O(n)
    // space - O(n)

    return answer
}

/*---OPTION 1---*/
// 2 nested for loops
// loop through the array twice, and compare every number
// if they're equal, increment count

// time - O(n^2)
// space - O(1)* *Some schools of thought don't count space used by the initial input

/*---OPTION 3---*/
// Sort and search
// sort the array
// O(nlogn)

//loop through the array
// O(n)
// do a binary search
// O(logn)
// O(nlogn)

// time - O(nlogn)
// space - O()
// if we sort in place O(1)
// if we don't sort in place O(n) 