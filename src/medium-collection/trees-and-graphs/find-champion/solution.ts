export function findChampion(n: number, edges: number[][]): number {
  const refCount = new Array(n).fill(0);
  for (const [from, to] of edges) {
    refCount[to]++;
  }
  const zeroRefs = refCount.map((value, index) => (value === 0 ? index : -1)).filter((index) => index !== -1);
  return zeroRefs.length === 1 ? zeroRefs[0] : -1;
}
