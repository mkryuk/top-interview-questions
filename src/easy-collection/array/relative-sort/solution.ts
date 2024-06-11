export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const orderMap = new Map<number, number>();
  for (let i = 0; i < arr2.length; i++) {
    orderMap.set(arr2[i], i);
  }

  arr1.sort((a, b) => {
    if (orderMap.has(a) && orderMap.has(b)) {
      return orderMap.get(a)! - orderMap.get(b)!;
    } else if (orderMap.has(a)) {
      return -1;
    } else if (orderMap.has(b)) {
      return 1;
    } else {
      return a - b;
    }
  });

  return arr1;
}
