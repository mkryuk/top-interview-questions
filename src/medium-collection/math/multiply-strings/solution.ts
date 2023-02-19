export function multiply(num1: string, num2: string): string {
  const n1 = num1.length;
  const n2 = num2.length;
  const result = new Array(n1 + n2).fill(0);

  // iterate over digits of num1 (in reverse order)
  for (let i = n1 - 1; i >= 0; i--) {
    // iterate over digits of num2 (in reverse order)
    for (let j = n2 - 1; j >= 0; j--) {
      // multiply the two digits and add to the appropriate position in result
      const prod = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
      const sum = result[i + j + 1] + prod; // add to the digit at i+j+1
      result[i + j + 1] = sum % 10; // update the digit at i+j+1
      result[i + j] += Math.floor(sum / 10); // add the carry to the digit at i+j
    }
  }

  // find the index of the first non-zero digit in result
  let i = 0;
  while (i < result.length && result[i] === 0) {
    i++;
  }

  // if result is all zeros, return '0', otherwise return the remaining digits as a string
  if (i === result.length) {
    return "0";
  }
  return result.slice(i).join("");
}
