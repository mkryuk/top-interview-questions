export function largestGoodInteger(num: string): string {
  let maxGoodInteger = "";

  for (let i = 0; i < num.length - 2; i++) {
    const currentChar = num[i];
    if (num[i + 1] === currentChar && num[i + 2] === currentChar) {
      const currentGoodInteger = num.substring(i, i + 3);
      if (currentGoodInteger > maxGoodInteger) {
        maxGoodInteger = currentGoodInteger;
      }
    }
  }

  return maxGoodInteger;
}
