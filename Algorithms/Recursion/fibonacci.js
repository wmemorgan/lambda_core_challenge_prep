function fibonacci(n) {
	// Base case
	if (n === 0) {
		return 0;
	}
	// Base case
	if (n === 1) {
		return 1;
	}
	// Add the sum of the previous two numbers
	return fibonacci(n - 1) + fibonacci(n - 2);
}
