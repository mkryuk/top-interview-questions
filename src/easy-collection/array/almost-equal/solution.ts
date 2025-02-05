export function areAlmostEqual(s1: string, s2: string): boolean {
  const n = s1.length;
  const diffIndices: number[] = [];
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      diffIndices.push(i);
    }
  }

  if (diffIndices.length > 2) {
    return false;
  }
  const [firstIndex, secondIndex] = diffIndices;

  return diffIndices.length === 0 || (s1[firstIndex] === s2[secondIndex] && s1[secondIndex] === s2[firstIndex]);
}
