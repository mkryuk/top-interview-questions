export function selfDividingNumbers(left: number, right: number): number[] {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }
  return result;
}

function isSelfDividing(num: number): boolean {
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === "0" || num % parseInt(strNum[i], 10) !== 0) {
      return false;
    }
  }
  return true;
}
