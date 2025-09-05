export function findClosest(x: number, y: number, z: number): number {
  const first = Math.abs(x - z);
  const second = Math.abs(y - z);
  if (first < second) {
    return 1;
  } else if (second < first) {
    return 2;
  }
  return 0;
}
