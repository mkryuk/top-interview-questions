export function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    return hammingWeight(a) - hammingWeight(b) || a - b;
  });
}

function hammingWeight(num: number) {
  let weight = 0;
  while (num > 0) {
    weight++;
    // this turns off the rightmost set bit
    // for num = 12 num & (num - 1) = 1100 & 1011 = 1000
    num &= num - 1;
  }
  return weight;
}
