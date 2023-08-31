export function bestClosingTime(customers: string): number {
  let yCount = new Array(customers.length + 1).fill(0);
  for (let i = customers.length - 1; i >= 0; i--) {
    if (customers[i] === "Y") {
      yCount[i] = yCount[i + 1] + 1;
    } else {
      yCount[i] = yCount[i + 1];
    }
  }

  let nCount = 0;
  let result = 0;
  let penalty = yCount[0];
  for (let i = 1; i < customers.length + 1; i++) {
    if (customers[i - 1] === "N") {
      nCount++;
    }
    if (penalty > yCount[i] + nCount) {
      penalty = yCount[i] + nCount;
      result = i;
    }
  }
  return result;
}
