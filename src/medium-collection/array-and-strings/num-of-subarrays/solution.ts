export function numOfSubarrays(arr: number[]): number {
  let result = 0;
  let oddCount = 0;
  let evenCount = 1;
  let currentParity = 0;
  let mod = 1e9 + 7;
  for (const num of arr) {
    currentParity = (currentParity + num) % 2;
    // if current prefix sum is odd, then every previous even prefix sum gives an odd subarray sum
    // if the current prefix sum is even, then every previous odd prefix sum gives an odd subarray sum.
    if (currentParity === 0) {
      result = (result + oddCount) % mod;
      evenCount++;
    } else {
      result = (result + evenCount) % mod;
      oddCount++;
    }
  }
  return result;
}
