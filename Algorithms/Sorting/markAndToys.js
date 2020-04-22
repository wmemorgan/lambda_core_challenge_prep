/*---MY SOLUTION---*/
function maximumToys(prices, k) {
    // Sort the toy prices
    prices.sort((a, b) => a - b)
    console.log(`sorted prices are ${prices}`)
    // Track cash on hand
    let cashOnHand = k
    // Track number of toys
    let toyCount = 0
    // Track price index
    let priceIndex = 0
    // Iterate through the toy list
    for (let i = 0; i < prices.length; i++) {
        // Subtract price from cash on hand
        // console.log(`buy toy for a price of ${prices[i]}`)
        if (cashOnHand > prices[i]) {
            cashOnHand -= prices[i]
            // Increment number of toys
            toyCount++
            // console.log(`bought a toy have ${toyCount} toys with remaining cash of ${cashOnHand}`)
        } else {
            break
        }
    }
    // Return toyCount
    return toyCount
}



/*=====CLASS DISCUSSION=====*/
/*---OPTION 1----
function maximumToys(prices, k) {
  // Sort the toy prices
  prices.sort((a,b) => a - b)
  let num_toys = 0
  // loop through prices until no money left,
  i = 0
  while (k > 0) {
    // subtract 1 toy's price from total
    k -= prices[i]
    i++
    // counter / indices to keep track of toys  
  }

  return i-1

}
*/

const toylist = [1, 12, 5, 111, 200, 1000, 10]
const money = 50

console.log(maximumToys(toylist, money))