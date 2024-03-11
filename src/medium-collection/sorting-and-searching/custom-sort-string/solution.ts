export function customSortString(order: string, s: string): string {
  const sortingMap = new Map<string, number>(
    Array.from(order).map((value, index) => [value, index]),
  );
  const result = Array.from(s).sort(
    (a, b) => (sortingMap.get(a) ?? Infinity) - (sortingMap.get(b) ?? Infinity),
  );
  return result.join("");
}
