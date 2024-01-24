export function mostVisited(n: number, rounds: number[]): number[] {
  let visitedCounts = new Array(n).fill(0);
  let result: number[] = [];
  for (let i = 0; i < rounds.length - 1; i++) {
    let start = rounds[i];
    const end = rounds[i + 1];
    while (start !== end) {
      visitedCounts[start - 1]++;
      start = (start % n) + 1;
    }
  }
  // Increment for the last sector of the last round
  visitedCounts[rounds[rounds.length - 1] - 1]++;
  const mostVisited = Math.max(...visitedCounts);
  for (let i = 0; i < visitedCounts.length; i++) {
    if (visitedCounts[i] === mostVisited) {
      result.push(i + 1);
    }
  }
  return result;
}
