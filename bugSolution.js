function add(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Non-numeric values provided';
  }

  return a + b;
}

console.log(add(2, '2')); // Output: 4
console.log(add(2, 'abc')); //Output: Invalid input: Non-numeric values provided
console.log(add(2, 2)); //Output: 4