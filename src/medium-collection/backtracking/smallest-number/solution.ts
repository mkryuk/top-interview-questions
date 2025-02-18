export function smallestNumber(pattern: string): string {
  const n = pattern.length;
  const result: string[] = [];
  const stack: number[] = [];
  for (let i = 0; i <= n; i++) {
    stack.push(i + 1);
    // if we're at the end or the current pattern character is 'I'
    if (i === n || pattern[i] === "I") {
      while (stack.length > 0) {
        // pop from stack to form the correct order for 'D' sequences.
        result.push(stack.pop()!.toString());
      }
    }
  }
  return result.join("");
}
