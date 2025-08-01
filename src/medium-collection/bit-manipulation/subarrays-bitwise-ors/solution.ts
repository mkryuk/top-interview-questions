export function subarrayBitwiseORs(arr: number[]): number {
  const result = new Set<number>();
  // ORs of subarrays ending at previous index
  let prev = new Set<number>();

  for (const num of arr) {
    const curr = new Set<number>();
    curr.add(num);
    for (const p of prev) {
      curr.add(p | num);
    }
    for (const c of curr) {
      result.add(c);
    }
    prev = curr;
  }

  return result.size;
}
