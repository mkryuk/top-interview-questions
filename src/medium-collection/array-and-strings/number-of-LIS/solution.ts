export function findNumberOfLIS(nums: number[]): number {
  let lisTable = new Array(nums.length).fill(1);
  let countTable = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (lisTable[j] + 1 > lisTable[i]) {
          lisTable[i] = lisTable[j] + 1;
          countTable[i] = 0;
        }
        if (lisTable[j] + 1 === lisTable[i]) {
          countTable[i] += countTable[j];
        }
      }
    }
  }

  let maxLength = 0;
  for (let i = 0; i < lisTable.length; i++) {
    maxLength = Math.max(lisTable[i], maxLength);
  }

  let result = 0;
  for (let i = 0; i < lisTable.length; i++) {
    if (lisTable[i] === maxLength) {
      result += countTable[i];
    }
  }

  return result;
}
