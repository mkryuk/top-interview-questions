export function findRotateSteps(ring: string, key: string): number {
  const n = ring.length;
  const m = key.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n).fill(Infinity));
  const pos: { [char: string]: number[] } = {};

  // Mapping the positions of each character in the ring
  for (let i = 0; i < n; i++) {
    if (!pos[ring[i]]) {
      pos[ring[i]] = [];
    }
    pos[ring[i]].push(i);
  }

  // Initialize DP for the first character of the key
  dp[0].fill(0); // No steps needed to "spell" nothing

  // Setting up the initial conditions for the first character in the key
  for (const index of pos[key[0]]) {
    const clockwise = index;
    const counterclockwise = n - clockwise;
    dp[1][index] = Math.min(clockwise, counterclockwise) + 1;
  }

  // Populate DP for the rest of the characters in the key
  for (let i = 1; i < m; i++) {
    for (const j of pos[key[i]]) {
      for (const k of pos[key[i - 1]]) {
        const clockwise = Math.abs(j - k);
        const counterclockwise = n - clockwise;
        dp[i + 1][j] = Math.min(
          dp[i + 1][j],
          dp[i][k] + Math.min(clockwise, counterclockwise) + 1,
        );
      }
    }
  }

  // Find the minimum steps from the last set of movements to finish spelling the key
  let minSteps = Infinity;
  for (const finalPosition of pos[key[m - 1]]) {
    minSteps = Math.min(minSteps, dp[m][finalPosition]);
  }

  return minSteps;
}
