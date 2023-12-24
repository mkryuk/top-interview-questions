export function minOperations(s: string): number {
  let count1 = 0; // Count changes for pattern "0101..."
  let count2 = 0; // Count changes for pattern "1010..."

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      // Even index
      if (s[i] === "1") {
        count1++; // For "0101..." pattern, there should be '0' at even places
      } else {
        count2++; // For "1010..." pattern, there should be '1' at even places
      }
    } else {
      // Odd index
      if (s[i] === "0") {
        count1++; // For "0101..." pattern, there should be '1' at odd places
      } else {
        count2++; // For "1010..." pattern, there should be '0' at odd places
      }
    }
  }

  // Return the minimum of the two counts
  return Math.min(count1, count2);
}
