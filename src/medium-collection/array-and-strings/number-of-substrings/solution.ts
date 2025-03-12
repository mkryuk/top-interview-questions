export function numberOfSubstrings(s: string): number {
  const frequencyMap: Record<string, number> = { a: 0, b: 0, c: 0 };
  let result = 0;
  const n = s.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
    frequencyMap[s[right]]++;
    while (frequencyMap["a"] > 0 && frequencyMap["b"] > 0 && frequencyMap["c"] > 0) {
      result += n - right;
      frequencyMap[s[left]]--;
      left++;
    }
  }

  return result;
}
