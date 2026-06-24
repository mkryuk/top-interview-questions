export function zigZagArrays(n: number, l: number, r: number): number {
  const MOD = 1e9 + 7;
  const down = new Array<number>(r + 1).fill(0);
  const up = new Array<number>(r + 1).fill(0);
  const downPrefix = new Array<number>(r + 2).fill(0);
  const upPrefix = new Array<number>(r + 2).fill(0);

  // virtual base state
  for (let value = l; value <= r; value++) {
    down[value] = 1;
    up[value] = 1;
    downPrefix[value] = value - l + 1;
    upPrefix[value] = value - l + 1;
  }

  for (let length = 1; length < n; length++) {
    for (let value = l; value <= r; value++) {
      // previous value must be greater than current value
      down[value] = (upPrefix[r] - upPrefix[value] + MOD) % MOD;
      // previous value must be smaller than current value
      up[value] = downPrefix[value - 1];
    }

    downPrefix[l] = down[l];
    upPrefix[l] = up[l];
    for (let value = l + 1; value <= r; value++) {
      downPrefix[value] = (downPrefix[value - 1] + down[value]) % MOD;
      upPrefix[value] = (upPrefix[value - 1] + up[value]) % MOD;
    }
  }

  return (downPrefix[r] + upPrefix[r]) % MOD;
}
