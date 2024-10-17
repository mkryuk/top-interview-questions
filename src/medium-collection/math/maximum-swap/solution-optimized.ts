export function maximumSwap(num: number): number {
  const numArray = num.toString().split("").map(Number);
  let rightIndex = numArray.length - 1;
  let maxIndex = numArray.length - 1;
  let leftIndex = -1;
  for (let i = numArray.length - 1; i >= 0; i--) {
    if (numArray[i] > numArray[maxIndex]) {
      maxIndex = i;
    } else if (numArray[i] < numArray[maxIndex]) {
      leftIndex = i;
      rightIndex = maxIndex;
    }
  }

  if (leftIndex !== -1) {
    let temp = numArray[rightIndex];
    numArray[rightIndex] = numArray[leftIndex];
    numArray[leftIndex] = temp;
  }

  return Number(numArray.join(""));
}
