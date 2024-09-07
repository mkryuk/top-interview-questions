export function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
  if (sx === fx && sy === fy && t === 1) {
    return false;
  }
  let xDiff = Math.abs(fx - sx);
  let yDiff = Math.abs(fy - sy);
  return Math.max(xDiff, yDiff) <= t;
}
