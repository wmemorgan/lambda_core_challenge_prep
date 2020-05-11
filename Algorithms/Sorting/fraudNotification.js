/*
 * Technical coaching assignment for Sorting
 * https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
 */

/*----MY SOLUTION ATTEMPT 2----
* Based on discovered solution:
* https://www.youtube.com/watch?v=46V6tnxy_Vs
*/
function activityNotifications(expenditure, trailingDays) {
    const countingSort = new Array(201).fill(0)
    let currentIndex = 0
    let endIndex = trailingDays
    let fraudAlerts = 0

    for (let i = 0; i < endIndex; i++) {
        countingSort[expenditure[i]]++
    }

    const mediaIndex = trailingDays % 2 === 0 ?
        parseInt(trailingDays / 2) : parseInt(trailingDays / 2) + 1

    while (endIndex < expenditure.length) {
        const medianAmount = getMedian(countingSort, trailingDays, mediaIndex)
        
        if (expenditure[endIndex] >= medianAmount * 2) {
            fraudAlerts++;
        }

        countingSort[expenditure[currentIndex]]--
        countingSort[expenditure[endIndex]]++

        currentIndex++
        endIndex++
    }

    return fraudAlerts
}

function getMedian(countingSort, trailingDays, medianIndex) {
    let counter = 0
    let leftValue = 0

    while (counter < medianIndex) {
        counter += countingSort[leftValue]
        leftValue++
    }

    let rightValue = leftValue
    leftValue--

    if (counter > medianIndex || trailingDays % 2 !== 0) {
        return leftValue
    } else {
        while (countingSort[rightValue] === 0) {
            rightValue++
        }

        return (leftValue + rightValue) / 2
    }
}


/*----MY SOLUTION ATTEMPT 1----
function activityNotifications(expenditure, d) {
    // Track fraud alerts
    let fraudAlerts = 0;
    // Iterate through transaction data
    for (let i = 0; i < expenditure.length; i++) {
        // If i is greater than or equal to number of trailing days
        if (i >= d) {
            console.log(`I spent $${expenditure[i]} today`);
            // Slice trailing days from transaction data
            let trailingDays = getTrailingDays(expenditure, i, d);
            // Identify or calculate the median expenditure
            let medianAmt = getMedian(trailingDays);
            console.log(`alert threshold ${medianAmt * 2}`);
            // Compare current expenditure with 2 x median expenditure
            if (expenditure[i] >= medianAmt * 2) {
                fraudAlerts++;
                console.log(
                    `FRAUD ALERT: Spent $${expenditure[i]} >= ${medianAmt * 2}`
                );
            }
        }
    }

    return fraudAlerts;
}

function getTrailingDays(arr, endIndex, trailingDays) {
    const startIndex = endIndex - trailingDays;
    const trailingTransactions = arr
        .slice(startIndex, endIndex)
        .sort((a, b) => a - b);
    console.log(`trailing transactions ${trailingTransactions}`);
    return trailingTransactions;
}

function getMedian(arr) {
    let midpoint = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return (arr[midpoint - 1] + arr[midpoint]) / 2;
    }

    return arr[midpoint];
}
*/

/*----TEST CASES----*/
// const spending = [10, 20, 30, 40, 50]
// const days = 3


// const spending = [2, 3, 4, 2, 3, 6, 8, 4, 5];
// const days = 5;

// const spending = [1, 2, 3, 4, 4]
// const days = 4

// Large volume test case
const fs = require('fs')
const spending = fs.readFileSync('input02copy.txt', 'utf8').split(' ')
console.log(`number of transactions ${spending.length}`)
days = 9999

console.log(`expenditures ${spending.length < 200 ? spending : spending.slice(0, 201) + ',....(truncated)...,' + spending.slice(spending.length-10, spending.length)}`)
console.log(`trailing days ${days}`)
console.log(activityNotifications(spending, days));
