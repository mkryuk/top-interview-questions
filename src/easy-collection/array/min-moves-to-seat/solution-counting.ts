export function minMovesToSeat(seats: number[], students: number[]): number {
  const n = seats.length;
  let maxValue = -Infinity;
  for (let i = 0; i < n; i++) {
    maxValue = Math.max(seats[i], students[i], maxValue);
  }
  const differences = new Array(maxValue + 1).fill(0);
  for (const seat of seats) {
    differences[seat]++;
  }

  for (const student of students) {
    differences[student]--;
  }

  let result = 0;
  let unmatched = 0;
  for (const difference of differences) {
    result += Math.abs(unmatched);
    unmatched += difference;
  }
  return result;
}
