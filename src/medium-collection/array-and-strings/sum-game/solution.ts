export function sumGame(num: string): boolean {
  const half = num.length / 2;
  let leftSum = 0;
  let rightSum = 0;
  let leftQ = 0;
  let rightQ = 0;

  for (let i = 0; i < num.length; i++) {
    const char = num[i];

    if (i < half) {
      if (char === "?") {
        leftQ++;
      } else {
        leftSum += Number(char);
      }
    } else {
      if (char === "?") {
        rightQ++;
      } else {
        rightSum += Number(char);
      }
    }
  }

  return 2 * (leftSum - rightSum) !== 9 * (rightQ - leftQ);
}
