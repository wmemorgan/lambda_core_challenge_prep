/*----MY SOLUTION----*/
function activityNotifications(expenditure, d) {
    // Create trailing transaction array
    const trailingArr = []
    for (let i = 0; i < expenditure.length - d; i++) {
        let subArr = getTrailingDays(expenditure, i, d);
        console.log(`subArr ${typeof subArr}`)
        trailingArr.push(subArr);
    }
    console.log(`trailingArr ${trailingArr}`)
	// Track fraud alerts
	let fraudAlerts = 0;
	// Iterate through transaction data
	for (let i = 0; i < expenditure.length; i++) {
        // If i is greater than number of trailing days
        console.log(`trailingArr[i]: ${trailingArr[i]}`);
		// if (i >= d) {
		// 	console.log(`I spent $${expenditure[i]} today`);
		// 	// Slice trailing days from transaction data
		// 	//let trailingDays = getTrailingDays(expenditure, i, d);
		// 	// Identify or calculate the median expenditure
		// 	let medianAmt = getMedian(trailingArr[i]);
		// 	console.log(`alert threshold ${medianAmt * 2}`);
		// 	// Compare current expenditure with 2 x median expenditure
		// 	if (expenditure[i] >= medianAmt * 2) {
		// 		fraudAlerts++;
		// 		console.log(
		// 			`FRAUD ALERT: Spent $${expenditure[i]} >= ${medianAmt * 2}`
		// 		);
		// 	}
		// }
	}

	return fraudAlerts;
}

// function getTrailingDays(arr, endIndex, trailingDays) {
// 	const startIndex = endIndex - trailingDays;
// 	const trailingTransactions = arr
// 		.slice(startIndex, endIndex)
// 		.sort((a, b) => a - b);
// 	console.log(`trailing transactions ${trailingTransactions}`);
// 	return trailingTransactions;
// }

function getTrailingDays(arr, startIndex, trailingDays) {
	const endIndex = startIndex + trailingDays + 1;
	const trailingTransactions = arr
		.slice(startIndex, endIndex)
		// .sort((a, b) => a - b);
	console.log(`trailing transactions ${typeof trailingTransactions}`);
	return trailingTransactions;
}


function getMedian(arr) {
	let midpoint = Math.floor(arr.length / 2);

	if (arr.length % 2 === 0) {
		return (arr[midpoint - 1] + arr[midpoint]) / 2;
	}

	return arr[midpoint];
}

// const spending = [10, 20, 30, 40, 50]
// const days = 3

const spending = [2, 3, 4, 2, 3, 6, 8, 4, 5];
const days = 5;

// const spending = [1, 2, 3, 4, 4]
// const days = 4

console.log(activityNotifications(spending, days));
