export function canBeValid(s: string, locked: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }
  // tracks the least number of open brackets possible.
  let minOpen = 0;
  // tracks the most number of open brackets possible.
  let maxOpen = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === "1") {
      if (s[i] === "(") {
        minOpen++;
        maxOpen++;
      } else {
        minOpen--;
        maxOpen--;
      }
    } else {
      maxOpen++;
      minOpen--;
    }
    if (maxOpen < 0) {
      return false;
    }
    // minOpen cannot be negative
    minOpen = Math.max(minOpen, 0);
  }
  return minOpen === 0;
}
