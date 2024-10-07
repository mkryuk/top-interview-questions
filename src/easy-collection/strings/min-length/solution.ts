export function minLength(s: string): number {
  let stack: string[] = [];
  for (const ch of s) {
    if (stack[stack.length - 1] + ch === "AB" || stack[stack.length - 1] + ch === "CD") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.length;
}
