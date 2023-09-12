export function groupThePeople(groupSizes: number[]): number[][] {
  let result: number[][] = [];
  let map = new Map<number, number[]>();
  for (let i = 0; i < groupSizes.length; i++) {
    let key = groupSizes[i];
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(i);
    if (map.get(key)!.length === groupSizes[i]) {
      result.push(map.get(key)!);
      map.set(key, []);
    }
  }
  return result;
}
