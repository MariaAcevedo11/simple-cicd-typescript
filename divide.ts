/**
 * Returns the division of two numbers.
 * @throws Error if b is 0 (division by zero)
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { divide: typeof divide }).divide = divide;
