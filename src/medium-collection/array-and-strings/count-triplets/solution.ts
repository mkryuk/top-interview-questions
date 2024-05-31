export function countTriplets(arr: number[]): number {
  const n = arr.length;
  const prefixXor = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixXor[i + 1] = prefixXor[i] ^ arr[i];
  }
  let result = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (prefixXor[j] === prefixXor[i + 1]) {
        result += i - j;
      }
    }
  }
  return result;
}
