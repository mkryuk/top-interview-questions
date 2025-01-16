export function minimizeXor(num1: number, num2: number): number {
  let bitCount = countSetBits(num2);
  let result = 0;
  // place 1s from the most significant bit of num1 as much as possible
  for (let i = 31; i >= 0; i--) {
    if ((num1 & (1 << i)) !== 0 && bitCount > 0) {
      result |= 1 << i;
      bitCount--;
    }
  }

  // if there are still bits left to place, fill from the least significant bit
  for (let i = 0; i < 32 && bitCount > 0; i++) {
    if ((num1 & (1 << i)) === 0) {
      result |= 1 << i;
      bitCount--;
    }
  }
  return result;
}

function countSetBits(num: number): number {
  let count = 0;
  while (num > 0) {
    if ((num & 1) === 1) {
      count++;
    }
    num >>= 1;
  }
  return count;
}
