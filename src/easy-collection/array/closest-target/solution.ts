export function closestTarget(words: string[], target: string, startIndex: number): number {
  const n = words.length;
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      const direct = Math.abs(i - startIndex);
      const circular = n - direct;
      const distance = Math.min(direct, circular);

      result = Math.min(result, distance);
    }
  }

  if (result === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return result;
}
