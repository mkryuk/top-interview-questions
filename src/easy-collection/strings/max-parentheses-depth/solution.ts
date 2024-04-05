export function maxDepth(s: string): number {
  let result = 0;
  let currentDepth = 0;
  for (const char of s) {
    if (char === "(") {
      currentDepth++;
      result = Math.max(result, currentDepth);
    } else if (char === ")") {
      currentDepth--;
    }
  }
  return result;
}
