export function lemonadeChange(bills: number[]): boolean {
  let fivesTotal = 0;
  let tensTotal = 0;

  for (const bill of bills) {
    switch (bill) {
      case 5:
        fivesTotal++;
        break;
      case 10:
        if (fivesTotal === 0) {
          return false;
        }
        fivesTotal--;
        tensTotal++;
        break;
      case 20:
        if (tensTotal > 0 && fivesTotal > 0) {
          tensTotal--;
          fivesTotal--;
        } else if (fivesTotal >= 3) {
          fivesTotal -= 3;
        } else {
          return false;
        }
        break;
    }
  }

  return true;
}
