/*====CLASS DISCUSSION====*/
/* OPTION 1
function whatFlavors(cost, money) {
  // create a hashmap for our cost
  const costMap = {}
  for (let i = 0; i < cost.length; i++) {
    // map[cost] -> [array of indices]
    costMap[cost[i]] =  costMap.hasOwnProperty([cost[i]]) ? 
    [...costMap[cost[i]], i] : [i]
  }
  
  // loop over cost array
  for (let i = 0; i < cost.length; i++) {
    // money - arr[i] = target
    // money / 2 == arr[i]
    
    // check our map for this and see if it has duplicate values in the index

    // map[target]
    // loop over our array in map, if index == index we're on, then we skip it
    // if it exits and it has multiple indices

    // we then know the indices we want are the current index, and the one we found in the array

  }


  // return our two indices

}
 */


/* My Solution */
function whatFlavors(cost, money) {
    // Create hashtable of flavor prices and their respective index (create an array to accommodate multiple flavors with the same price)
    const flavorMap = {}
    for (let i = 0; i < cost.length; i++) {
        flavorMap[cost[i]] = flavorMap.hasOwnProperty(cost[i]) ?
            [...flavorMap[cost[i]], i] : [i]
    }

    // Track relevant flavorIds
    const flavorIds = []

    // Loop through cost array
    for (let i = 0; i < cost.length; i++) {
        // Calculate the missing addend and see if it is in the hash table
        const addend = money - cost[i]
        console.log(`length of array ${flavorMap[cost[i]].length}`)
        if (cost[i] === addend && flavorMap[cost[i]].length > 1) {
            const flavorIds = getFlavorIds(flavorMap[cost[i]])
            console.log("DUPLICATES")
            return flavorIds.join(' ')
        }

        else if (cost[i] !== addend && flavorMap.hasOwnProperty(addend)) {
            // If so return the ID number (index + 1) of the current element AND the ID number of the addend

            const flavorIds = getFlavorIds(flavorMap[cost[i]], flavorMap[addend])


            return flavorIds.join(' ')
        }
    }
}

function getFlavorIds(arr1, ...arr2) {
    const arr = [...arr1, ...arr2]
    const flavorIds = arr.map(index => parseInt(index) + 1)
    console.log(`flavorIds ${flavorIds}`)
    return flavorIds
}

cost = [4, 3, 2, 5, 7]
money = 8

whatFlavors(cost, money)