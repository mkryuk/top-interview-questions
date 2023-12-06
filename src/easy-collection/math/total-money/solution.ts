export function totalMoney(n: number): number {
  const weekSum = 28;
  const weeks = Math.trunc(n / 7);
  const arithmeticSum = 7 * ((weeks * (weeks - 1)) / 2);
  const weeksSum = weekSum * weeks + arithmeticSum;
  const daysLeft = n % 7;
  let daysSum = 0;
  for (let coin = 1; coin <= daysLeft; coin++) {
    daysSum += weeks + coin;
  }
  return weeksSum + daysSum;
}
