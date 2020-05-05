/*
 * Technical Coaching Lecture on Stacks
 * https://codeinterview.io/playback/QNIIMQJRLQ#?t=27
 */

class Stack {
	constructor() {
		this.storage = [];
	}

	push(item) {
		this.storage.push(item);
	}

	pop() {
		return this.storage.pop();
	}

	peek() {
		return this.storage[this.storage.length - 1];
	}

	isEmpty() {
		return this.storage.length === 0;
	}

	printContents() {
		this.storage.forEach((elem) => console.log(elem));
	}
}

// Write a function sortStack that receives a stack of integers and
// returns another stack containing those same integers in sorted order.
// You may use at most one additional stack to hold items, but you may not
// copy the elements into any other data structure.

/*-----CLASS SOLUTION-----*/
function sortStack(inputStack) {
	const outputStack = new Stack();
	while (!inputStack.isEmpty()) {
		// pop the top one off the stack, store that in a temp var
		const tempVar = inputStack.pop();
		// compare the temp var to the top of the stack, if the temp is smaller than the top of the other stack
		// then we add it
		// or check if the other stack is empty
		if (outputStack.isEmpty() || outputStack.peek() > tempVar) {
			// add this to the other stack
			outputStack.push(tempVar);
		}
		// if it's not smaller
		else {
			// then we pop off the second stack until temp is smaller than the top OR it's empty
			while (outputStack.peek() < tempVar) {
				inputStack.push(outputStack.pop());
			}
			// then add this to other stack
			outputStack.push(tempVar);
		}
		// repeat until inputStack is empty
	}

	return outputStack;
}

// O(n) space complexity
// O(n^2) time complexity

/*-----MY SOLUTION ATTEMPT 3-----
function sortStack(stack) {
  const sortedStack = new Stack()
  sortedStack.push(stack.pop())

  while (stack.length > 0) {
    let temp = stack.pop()
    if (temp > sortedStack.peek()) {
      emptyStack(sortedStack, stack)
      sortedStack.push(temp)
    } else {
      sortedStack.push(temp)
    }
  }

  return sortedStack
}

function emptyStack(source, target) {
  while (source.storage.length > 0) {
    target.push(source.pop())
  }
}
*/

/*----MY SOLUTION ATTEMPT 2----
function sortStack(stack) {
  // Initialize sortedStack
  const sortedStack = new Stack()
  let maxNum = stack.shift()
  sortedStack.push(maxNum)
  // loop while sortedStack is less than length of original stack
  while (stack.length > 0) {
    // Iterate through input stack
    for (let i = 0; i < stack.length; i++) {
      console.log(`evaluate ${stack[i]}`)
      // Populate sortedStack if empty
      if (sortedStack.isEmpty()) {
        sortedStack.push(stack.splice(i,1)[0])
      }
      else if (stack[i] > maxNum) {
        console.log(`stack[i] ${stack[i]} sortedStack.peek ${sortedStack.peek()}`)
        let tempMax = maxNum
        let temp = sortedStack.pop()
        maxNum = stack.splice(i,1)[0]
        sortedStack.push(maxNum)
        stack.push(tempMax)
        // sortedStack.push(temp)
      } else {
        sortedStack.push(stack.splice(i,1)[0])
      }
    }
  }
  // Return sortedStack
  console.log(sortedStack.printContents())
  return sortedStack
}
*/

/*----MY SOLUTION ATTEMPT 1----
function sortStack(stack) {
  // Initialize comparisonStack and sortedStack
  const comparisonStack = new Stack()
  const sortedStack = new Stack()
  const goal = stack.length
  // loop while input stack length is greater than 0
  while (sortedStack.storage.length < goal) {
    console.log(`stack: ${stack}`)
    // Iterate through the input stack
    for (let i = 0; i < stack.length; i++) {
      // If comparisonStack is empty
      if (comparisonStack.isEmpty()) {
        // Remove from stack and add to comparisonStack
        comparisonStack.push(stack.splice(i,1)[0])
      }
      // Compare value in input stack with comparisonStack 
      // If input stack value is greater 
      else if (stack[i] > comparisonStack.peek()) {
        // Swap top of comparisonStack and stack[i]
        // Pop from comparisonStack
        let temp = comparisonStack.pop()
        // Remove from input stack and add to comparisonStack
        comparisonStack.push(stack.splice(i,1)[0])
        stack.push(temp[0])
      } 
    }   
    // After iteration
    // Pop comparison stack and add to sortedStack
    sortedStack.push(comparisonStack.pop())
    // Repeat process until input stack length is 0
  }

  // Return sortedStack
  console.log(sortedStack.printContents())
  return sortedStack
}
*/

// const input = [3,4,1,2,5]
// const input = [3,4,2,1,5]
// const input = [5,1,2,4,3]
// sortStack(input)

const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

const sortedStack = sortStack(s); // sortedStack is also a Stack instance

sortedStack.printContents(); // should print 1, 4, 5, 6, 8, 10
