export function numberOfWays(corridor: string): number {
  let mod = 1e9 + 7;
  let seats = 0;
  let seatsIndexes: number[] = [];
  for (let i = 0; i < corridor.length; i++) {
    if (corridor[i] === "S") {
      seats++;
      seatsIndexes.push(i);
    }
  }

  // there is no way to divide corridor into sections
  // where each section has exactly two seats
  if (seats === 0 || seats % 2 !== 0) {
    return 0;
  }

  let result = 1;
  for (let i = 2; i < seatsIndexes.length; i += 2) {
    // we have plants+1 ways to place divider
    let ways = seatsIndexes[i] - seatsIndexes[i - 1];
    result = (result * ways) % mod;
  }
  return result;
}
