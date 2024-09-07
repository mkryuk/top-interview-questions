export function maximumImportance(n: number, roads: number[][]): number {
  const degrees = new Array(n).fill(0);
  for (const [a, b] of roads) {
    degrees[a]++;
    degrees[b]++;
  }

  const cityIndices = degrees.map((degree, index) => index).sort((a, b) => degrees[b] - degrees[a]);

  const importanceValues = new Array(n);
  for (let i = 0; i < n; i++) {
    importanceValues[cityIndices[i]] = n - i;
  }

  let result = 0;
  for (const [a, b] of roads) {
    result += importanceValues[a] + importanceValues[b];
  }

  return result;
}
