/*
 * Technical Coaching Lecture on Queues:
 * https://www.hackerrank.com/challenges/truck-tour/problem
 */

/*----CLASS LECTURE (05/20/2020)----*/
/* Algorithm */
// two pointers, one for our start, and one for our current
// check our current gas + gas station gas and make sure it's enough to get to the next station
    // if it's not possible
        // our start pointer moves
        // reset the current to same as start

    // if it is possible
        // move to next gas station (increment current pointer)
        // calculate the gas we will have left
function truckTour(petrolpumps) {
  /*
  * Write your code here.
  */
  let start = 0;
  let current = 0;

  let currentGas = 0; // HERE
  while (start < petrolpumps.length) {
    let station = petrolpumps[current];
    let gasQty = station[0];
    let distanceToNextStation = station[1];

    currentGas += gasQty
    currentGas -= distanceToNextStation
    if (currentGas >= 0) {
      current += 1;
      if (current >= petrolpumps.length) {
        current = 0;
      }
      if (start === current) {
        return start;
      }
    } else {
      start += 1
      current = start
      currentGas = 0
    }
  }

  return null;
}

/*----MY SOLUTION 2-----
function truckTour(petrolpumps) {
	let head = 0;
	let smallestIndex = 0;
	let fuel = 0;

	while (head < petrolpumps.length) {
		fuel += petrolpumps[smallestIndex][0];
		fuel -= petrolpumps[smallestIndex][1];

		// Reset
		if (fuel < 0) {
			head++;
			smallestIndex = head;
			fuel = 0;
			continue;
		}

		// Circular advance
		smallestIndex++;
		smallestIndex = smallestIndex % petrolpumps.length;

		if (smallestIndex === head) {
			return smallestIndex;
		}
	}
}
*/

/*----CLASS LECTURE---
function truckTour(petrolpumps) {
  // compare each pump gas vs distance and see if we can make it to the next pump
  // figure out if we can make it with our currentGas to the next node
  let start = 0
  let current = 0
  let currentGas = 0

  while (start < petrolpumps.length) {
    // fill up on gas -> add to current gas
    // subtract the gas it will take to get to the next station
    let gasAmount = petrolpumps[current][0]
    let distance = petrolpumps[current][1]

    currentGas += gasAmount
    currentGas -= distance

    if (currentGas < 0) {
      start++
      current = start
      currentGas = 0
      continue
    }

    current++
    if (current >= petrolpumps.length) {
      current = 0
    }

    // how do we know that we've finished?
    if (current === start) {
      return start
    }
  }
}
*/

/*-----MY SOLUTiON ATTEMPT 1-----
function truckTour(petrolpumps) {
  // Create a queue and populate it with petrolpumps info
  let head
  let tail
  let fuel
  let smallestIndex
  // Iterate through the queue
  for (let i = 0; i < petrolpumps.length; i++) {
    // Find a pump that has equal or more fuel than miles to the next pump
    // Assign index to head    
    head = i
    // Find tail
    tail = findTail(i, petrolpumps.length)
    // Add fuel to tank
    fuel = petrolpumps[i][0]

    if (petrolpumps[i][0] >= petrolpumps[i][1]) {
        let isComplete = verifyTrip(petrolpumps, head, tail, fuel)
        if (isComplete) {
          smallestIndex = head
          break
        }
        else {
          continue
        }
    }
  }

  return smallestIndex
}

function advanceIndex(startingIndex, length) {
  let currentIndex = startingIndex
  currentIndex++
  currentIndex = currentIndex % length 

  return currentIndex
}

// Identify tail (pass current index, and length of queue)
function findTail(index, length) {
  let tail = index
  // Initialize tail variable to 0
  let counter = 0
  // while tail is less than queue length
  while (counter < length) {
    // increment tail
    tail = advanceIndex(tail, length)
    // increment counter
    counter++
  }

  // return tail
  return tail
}

function verifyTrip(arr, head, tail, fuel) {
  // Initialize fuelTank
  let currentFuel = fuel
  // Initialize currentIndex = head
  let currentIndex = head
  // while index is not equal to tail
  while (currentIndex !== tail) {
    // subtract arr[index][1] from fuelTank
    fuelTank = fuelTank - arr[currentIndex][1]
    // increment index
    let nextIndex =  advanceIndex(currentIndex, arr.length)
    // add arr[index][0] to fuelTank
    fuelTank = fuelTank + arr[nextIndex][0]
    if (fuelTank < arr[currentIndex][1]) {
      return false
    }
    currentIndex = nextIndex 
  }
  return true
}
*/

const pumps = [
	[1, 5],
	[10, 3],
	[3, 4],
];

console.log(truckTour(pumps));
