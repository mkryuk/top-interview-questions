export function numEquivDominoPairs(dominoes: number[][]): number {
  let dominoesMap = new Map<string, number>();
  let result = 0;
  for (const [a, b] of dominoes) {
    const domino = a < b ? `${a}:${b}` : `${b}:${a}`;
    const count = dominoesMap.get(domino) ?? 0;
    result += count;
    dominoesMap.set(domino, count + 1);
  }
  return result;
}
