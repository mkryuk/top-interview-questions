export function countSymmetricIntegers(low: number, high: number): number {
  let result = 0;
  for (let i = low; i <= high; i++) {
    const strNum = i.toString();
    if (strNum.length % 2 !== 0) {
      continue;
    }
    const n = strNum.length / 2;
    let left = strNum.slice(0, n);
    let right = strNum.slice(n);
    if (sumEqual(left, right)) {
      result++;
    }
  }
  return result;
}

function sumEqual(left: string, right: string): boolean {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < left.length; i++) {
    leftSum += parseInt(left[i]);
    rightSum += parseInt(right[i]);
  }
  return leftSum === rightSum;
}
