export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  let result = 0;

  for (const num1 of arr1) {
    let isValid = true;
    for (const num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      result++;
    }
  }

  return result;
}
