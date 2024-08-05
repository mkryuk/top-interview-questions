export function kthDistinct(arr: string[], k: number): string {
  let map = new Map<string, number>();
  for (const str of arr) {
    if (!map.has(str)) {
      map.set(str, 0);
    }
    map.set(str, map.get(str)! + 1);
  }

  for (const [str, count] of map) {
    if (count === 1) {
      k--;
    }
    if (k === 0) {
      return str;
    }
  }
  return "";
}
