export function finalString(s: string): string {
  const n = s.length;
  let iCount = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "i") {
      iCount++;
    }
  }
  let result: string[] = new Array(n - iCount);
  let start = 0;
  let end = result.length - 1;
  let reversed = false;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "i") {
      reversed = !reversed;
      continue;
    }
    if (!reversed) {
      result[end] = s[i];
      end--;
    } else {
      result[start] = s[i];
      start++;
    }
  }

  return result.join("");
}
