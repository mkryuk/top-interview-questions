export function timeRequiredToBuy(tickets: number[], k: number): number {
  let result = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      result += Math.min(tickets[i], tickets[k]);
    } else {
      result += Math.min(tickets[i], tickets[k] - 1);
    }
  }
  return result;
}
