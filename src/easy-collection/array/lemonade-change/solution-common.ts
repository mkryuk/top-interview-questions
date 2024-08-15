export function lemonadeChange(bills: number[]): boolean {
  // map each bill value to an index in the billCounts array
  const billMap = new Map<number, number>([
    [5, 0],
    [10, 1],
    [20, 2],
  ]);

  // [fivesTotal, tensTotal, twentiesTotal]
  const billCounts = [0, 0, 0];

  for (const bill of bills) {
    const index = billMap.get(bill);
    if (index !== undefined) {
      billCounts[index]++;
    }

    let change = bill - 5;
    const billValues = [5, 10, 20];
    for (let i = billValues.length - 1; i >= 0; i--) {
      if (change < billValues[i]) {
        continue;
      }
      let count = Math.floor(change / billValues[i]);
      count = Math.min(count, billCounts[i]);
      change -= count * billValues[i];
      billCounts[i] -= count;
    }

    if (change > 0) {
      return false;
    }
  }

  return true;
}
