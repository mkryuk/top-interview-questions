export function bestClosingTime(customers: string): number {
  let minPenalty = 0;
  let currPenalty = 0;
  let result = 0;
  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Y") {
      currPenalty--;
    } else {
      currPenalty++;
    }
    if (currPenalty < minPenalty) {
      minPenalty = currPenalty;
      result = i + 1;
    }
  }
  return result;
}
