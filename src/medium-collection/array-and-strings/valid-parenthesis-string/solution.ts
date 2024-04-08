export function checkValidString(s: string): boolean {
  let low = 0; // Lowest possible open parentheses count
  let high = 0; // Highest possible open parentheses count

  for (let c of s) {
    if (c === "(") {
      low++;
      high++;
    } else if (c === ")") {
      if (low > 0) {
        low--; // Decrease only if there's an unmatched '(' to match with
      }
      high--;
    } else if (c === "*") {
      if (low > 0) {
        low--; // '*' can be a ')'
      }
      high++; // '*' can be a '('
    }

    if (high < 0) {
      // Too many ')'
      return false;
    }
  }

  return low === 0; // If low is 0, then there's a valid way to match parentheses
}
