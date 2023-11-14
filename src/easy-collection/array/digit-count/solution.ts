export function digitCount(num: string): boolean {
  let map = new Map<string, number>();
  for (let i = 0; i < num.length; i++) {
    if (!map.has(num[i])) {
      map.set(num[i], 0);
    }
    map.set(num[i], map.get(num[i])! + 1);
  }
  for (let i = 0; i < num.length; i++) {
    if ((map.get(`${i}`) ?? 0) !== parseInt(num[i], 10)) {
      return false;
    }
  }
  return true;
}
