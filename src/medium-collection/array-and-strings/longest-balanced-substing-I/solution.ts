export function longestBalanced(s: string): number {
  const n = s.length;
  const alphabetSize = 26;
  // prefix[c][i] stores occurrences of char c in s[0..i-1].
  const prefix: number[][] = Array.from({ length: alphabetSize }, () => Array(n + 1).fill(0));

  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i) - 97;
    for (let c = 0; c < alphabetSize; c++) {
      prefix[c][i + 1] = prefix[c][i];
    }
    prefix[code][i + 1]++;
  }

  let result = 1;
  for (let start = 0; start < n; start++) {
    // skip lengths that cannot improve current best result.
    for (let end = start + result + 1; end <= n; end++) {
      let target = 0;
      let balanced = true;

      // all present characters must have the same count.
      for (let c = 0; c < alphabetSize; c++) {
        const count = prefix[c][end] - prefix[c][start];
        if (count > 0) {
          if (target === 0) {
            target = count;
          } else if (count !== target) {
            balanced = false;
            break;
          }
        }
      }

      if (balanced) {
        result = end - start;
      }
    }
  }

  return result;
}
