export function checkValidString(s: string): boolean {
  let leftStack: number[] = []; // Stack for '(' indices
  let starStack: number[] = []; // Stack for '*' indices

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      leftStack.push(i);
    } else if (char === "*") {
      starStack.push(i);
    } else {
      if (leftStack.length > 0) {
        leftStack.pop(); // '(' found for ')'
      } else if (starStack.length > 0) {
        starStack.pop(); // Use '*' as '('
      } else {
        return false; // No '(' or '*' to balance ')'
      }
    }
  }

  // Try to balance remaining '(' with '*'
  while (leftStack.length > 0 && starStack.length > 0) {
    if (leftStack[leftStack.length - 1] < starStack[starStack.length - 1]) {
      // There's a '*' after '(' to balance it
      leftStack.pop();
      starStack.pop();
    } else {
      // Found a '*' before '(', can't balance
      return false;
    }
  }

  // If there are no unbalanced '(', the string is valid
  return leftStack.length === 0;
}
