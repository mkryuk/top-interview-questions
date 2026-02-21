export function makeLargestSpecial(s: string): string {
  const parts: string[] = [];
  let balance = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      balance++;
    } else {
      balance--;
    }

    // when balance becomes zero, we found one top-level special block
    if (balance === 0) {
      // inner part is also a special binary string
      const inner = s.substring(start + 1, i);
      const bestInner = makeLargestSpecial(inner);
      const rebuilt = "1" + bestInner + "0";

      parts.push(rebuilt);
      start = i + 1;
    }
  }

  // sort descending to maximize lexicographic order
  parts.sort(compareDesc);

  return parts.join("");
}

function compareDesc(a: string, b: string): number {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
}
