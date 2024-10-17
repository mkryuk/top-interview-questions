export function maximumSwap(num: number): number {
  const numArray = num.toString().split("").map(Number);
  const sortedNums = [...numArray].sort((a, b) => b - a);

  const n = sortedNums.length;
  for (let i = 0; i < n; i++) {
    if (numArray[i] !== sortedNums[i]) {
      const idx = numArray.lastIndexOf(sortedNums[i]);
      const temp = numArray[i];
      numArray[i] = numArray[idx];
      numArray[idx] = temp;
      break;
    }
  }

  const result = Number(numArray.join(""));
  return result;
}
