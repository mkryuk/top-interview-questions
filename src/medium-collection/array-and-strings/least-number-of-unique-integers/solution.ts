export function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  let map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 0);
    }
    let count = map.get(arr[i])!;
    map.set(arr[i], count + 1);
  }
  let sortedMap = [...Array.from(map)].sort((a, b) => a[1] - b[1]);
  let index = 0;
  while (k-- > 0) {
    sortedMap[index][1]--;
    if (sortedMap[index][1] === 0) {
      index++;
    }
  }
  return sortedMap.length - index;
}
