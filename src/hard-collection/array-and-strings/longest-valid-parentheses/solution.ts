export function longestValidParentheses(s: string): number {
  const stack: number[] = [-1];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        // current ')' cannot be matched, so it becomes the new boundary
        stack.push(i);
      } else {
        // everything after the current boundary forms a valid substring
        const currentLength = i - stack[stack.length - 1];
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  }

  return maxLength;
}
