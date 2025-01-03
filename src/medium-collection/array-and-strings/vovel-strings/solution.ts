export function vowelStrings(words: string[], queries: number[][]): number[] {
  const n = words.length;
  const prefixSum = new Array(n + 1).fill(0);
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < n; i++) {
    if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
      prefixSum[i + 1]++;
    }
    prefixSum[i + 1] += prefixSum[i] ?? 0;
  }
  const result: number[] = [];
  for (const [start, end] of queries) {
    const quantity = prefixSum[end + 1] - prefixSum[start];
    result.push(quantity);
  }
  return result;
}
