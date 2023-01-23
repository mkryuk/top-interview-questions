export function findJudge(n: number, trust: number[][]): number {
  // Initialize an array "trustCount" of size n+1 with all elements set to 0
  let trustCount: number[] = Array(n + 1).fill(0);

  // Iterate through the trust array
  for (const [who, whom] of trust) {
    // Decrement the trust count for the person who trusts someone else
    trustCount[who]--;
    // Increment the trust count for the person who is trusted
    trustCount[whom]++;
  }
  // Return the index of the person who has a trust count of n-1 (or -1 if not found)
  // If not found return 1
  return trustCount.indexOf(n - 1) || 1;
}
