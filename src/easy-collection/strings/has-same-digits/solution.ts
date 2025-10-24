export function hasSameDigits(s: string): boolean {
  let numArr = s.split("").map(Number);
  const n = numArr.length;
  while (numArr.length > 2) {
    const tempNumArr: number[] = [];
    for (let i = 1; i < numArr.length; i++) {
      tempNumArr.push((numArr[i - 1] + numArr[i]) % 10);
    }
    numArr = tempNumArr;
  }
  return numArr[0] === numArr[1];
}
