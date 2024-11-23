export function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const rowPatterns = new Map<string, number>();
  for (const row of matrix) {
    let pattern: number[] = [];
    for (const ch of row) {
      pattern.push(ch === row[0] ? 1 : 0);
    }
    const patternKey = pattern.join(",");
    rowPatterns.set(patternKey, (rowPatterns.get(patternKey) ?? 0) + 1);
  }
  let result = 0;
  for (const val of rowPatterns.values()) {
    result = Math.max(result, val);
  }
  return result;
}
