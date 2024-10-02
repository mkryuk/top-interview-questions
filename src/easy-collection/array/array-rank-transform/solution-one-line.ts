export function arrayRankTransform(arr: number[]): number[] {
  return ((rankMap) => arr.map((v) => rankMap.get(v)!))(
    new Map(
      Array.from(new Set(arr))
        .sort((a, b) => a - b)
        .map((n, i) => [n, i + 1]),
    ),
  );
}
