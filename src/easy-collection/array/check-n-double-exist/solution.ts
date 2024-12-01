export function checkIfExist(arr: number[]): boolean {
  let set = new Set<number>();
  for (const number of arr) {
    if (set.has(number * 2) || set.has(number / 2)) {
      return true;
    }
    set.add(number);
  }
  return false;
}
