export function arrayRankTransform(arr: number[]): number[] {
  let rankMap = new Map<number, number>();
  let uniqueValues = Array.from(new Set(arr)).sort((a, b) => a - b);
  let rank = 1;
  for (let value of uniqueValues) {
    rankMap.set(value, rank++);
  }
  return arr.map((v) => rankMap.get(v)!);
}
