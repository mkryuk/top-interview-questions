export function getHappyString(n: number, k: number): string {
  const strings: string[] = [];
  backtrack("", n, strings);
  return strings.length >= k ? strings[k - 1] : "";
}

function backtrack(current: string, n: number, strings: string[]) {
  if (current.length === n) {
    strings.push(current);
    return;
  }
  const chars = ["a", "b", "c"];
  for (const ch of chars) {
    if (current[current.length - 1] !== ch) {
      backtrack(current + ch, n, strings);
    }
  }
}
