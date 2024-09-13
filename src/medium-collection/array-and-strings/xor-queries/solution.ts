export function xorQueries(arr: number[], queries: number[][]): number[] {
  const prefixXor = new Array(arr.length).fill(0);
  prefixXor[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixXor[i] = prefixXor[i - 1] ^ arr[i];
  }

  let result: number[] = [];
  for (const [left, right] of queries) {
    if (left === 0) {
      result.push(prefixXor[right]);
    } else {
      result.push(prefixXor[right] ^ prefixXor[left - 1]);
    }
  }
  return result;
}
