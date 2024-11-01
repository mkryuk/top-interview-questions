export function minimumTotalDistance(robot: number[], factory: number[][]): number {
  const N = robot.length;
  const M = factory.length;

  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const factoryPos = factory.map((f) => f[0]);
  const factoryLimit = factory.map((f) => f[1]);

  const dp: number[][] = Array.from({ length: N + 1 }, () => Array(M + 1).fill(Infinity));

  for (let j = 0; j <= M; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      // option 1: Do not use factory j
      dp[i][j] = dp[i][j - 1];

      const limitj = factoryLimit[j - 1];
      const max_k = Math.min(i, limitj);

      let cost = 0;
      // try assigning k robots to factory j
      for (let k = 1; k <= max_k; k++) {
        // compute cost for last k robots
        const robotIndex = i - k;
        cost += Math.abs(robot[robotIndex] - factoryPos[j - 1]);

        const prev = dp[i - k][j - 1];
        if (prev !== Infinity) {
          dp[i][j] = Math.min(dp[i][j], prev + cost);
        }
      }
    }
  }

  return dp[N][M];
}
