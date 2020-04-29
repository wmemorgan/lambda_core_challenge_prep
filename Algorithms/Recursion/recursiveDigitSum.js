/*=====LECTURE=====*/
/*---MY SOLUTION---
function superDigit(n, k) {
    // we are given n and k
    // to get p, we concatenate n together with itself k times
    let p = concatenate(n, k)

    // we need to define a recursive helper function
    return superDigitRecursive(p)

}

function concatenate(n, k) {
  let str = ""
  let count = 0
  while (count < k) {
    str += n
    count++
  }
  return str
}

function superDigitRecursive(p) {
  // Moving towards base case
  // when we have 1 digit
  if (p.length === 1) {
    return parseInt(p)
  }

  // convert p from string to array of integers
  const digits = p.split('').map(num => parseInt(num))

  // to get to the base case, we will sum our digits each time through our recursive functions
  // we want to sum all these digits
  const sumDigits = digits.reduce((sum, num) => sum + num, 0)

  // keep calling itself
  return superDigitRecursive(sumDigits.toString())
}
*/

/*---MY SOLUTION 2: OPTIMIZED---*/
function superDigit(n, k) {
	// We are given n and k
	let superNum = superDigitRecursive(n);
	let superK = Number(superNum) * k;

	// we need to define a recursive helper function
	return superDigitRecursive(superK.toString());
}

function superDigitRecursive(p) {
	// Moving towards base case
	// when we have 1 digit
	if (p.length === 1) {
		return p[0];
	}

	// Convert p from string to array of integers
	// Sum all these digits
	// Convert results back to string
	const sumDigits = Array.from(String(p), Number)
		.reduce((sum, num) => sum + num, 0)
		.toString();

	// Keep calling itself
	return superDigitRecursive(sumDigits);
}

/*---CLASS SOLUTION 1---
function superDigit(n, k) {
  // we are given n and k
  // to get 'p' we concatenate n together with itself k times
  let p = concatenate(n, k)

  return superDigitRecursive(p)


}


function concatenate(n, k) {
  let c = ""
  for (let i = 0; i < k; i++) {
    c += n
  }
  return c
}

// takes in a string 'p' and will sum the digits of p together
// returns the sum
function sumDigits(p) {
  let total = 0
  for (let i = 0; i < p.length; i++) {
    total += Number(p[i])
  }
  return total
}

function superDigitRecursive(p) {
  if (p.length === 1) {
    return p
  }

  const sum = sumDigits(p)

  return superDigitRecursive(sum.toString())
}
*/

/*---Optimization---*/
// what about memoization
// when we sum up some numbers, and we run into it again, we will already know the answer

// n = 123, k = 3
// instead we superDigit(123) * k
// 123 = 6 * 3 = 18
// 123123123 = 18

/*---CLASS SOLUTION 2---
function superDigit(n, k) {
  const superNum = superDigitRecursive(n)
  const superK = Number(superNum) * k

  // we are given n and k
  return superDigitRecursive(superK.toString())
}

function sumDigits(p) {
  let total = 0
  for (let i = 0; i < p.length; i++) {
    total += Number(p[i])
  }
  return total
}

function superDigitRecursive(p) {
  if (p.length === 1) {
    return p
  }

  const sum = sumDigits(p)

  return superDigitRecursive(sum.toString())
}
*/

console.log(superDigit(148, 3));
