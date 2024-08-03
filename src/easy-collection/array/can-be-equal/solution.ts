export function canBeEqual(target: number[], arr: number[]): boolean {
  if (arr.length !== target.length) {
    return false;
  }
  let map = new Map<number, number>();
  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num)! + 1);
  }

  for (const num of target) {
    if (!map.has(num) || map.get(num)! == 0) {
      return false;
    }
    map.set(num, map.get(num)! - 1);
  }
  return true;
}
