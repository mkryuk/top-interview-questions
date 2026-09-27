export function evaluate(s: string, knowledge: string[][]): string {
  const values = new Map<string, string>();
  // build a lookup table for all known keys
  for (const [key, value] of knowledge) {
    values.set(key, value);
  }

  const result: string[] = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] !== "(") {
      result.push(s[i]);
      i++;
      continue;
    }

    // find the closing bracket
    const start = i + 1;
    let end = start;
    while (s[end] !== ")") {
      end++;
    }

    const key = s.slice(start, end);
    // replace the bracket pair with its value or "?"
    result.push(values.get(key) ?? "?");
    i = end + 1;
  }

  return result.join("");
}
