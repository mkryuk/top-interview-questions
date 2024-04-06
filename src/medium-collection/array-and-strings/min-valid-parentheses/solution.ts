export function minRemoveToMakeValid(s: string): string {
  let stack: number[] = [];
  let indicesToRemove = new Set<number>();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        indicesToRemove.add(i);
      }
    }
  }
  for (const index of stack) {
    indicesToRemove.add(index);
  }

  let result: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (!indicesToRemove.has(i)) {
      result.push(s[i]);
    }
  }
  return result.join("");
}
