export function lengthOfLIS(nums: number[]): number {
  const lisTable = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        lisTable[i] = Math.max(lisTable[j] + 1, lisTable[i]);
      }
    }
  }
  return Math.max(...lisTable);
}
