export function passThePillow(n: number, time: number): number {
  const cycleLength = n - 1;
  const cyclesCompleted = Math.floor(time / cycleLength);
  const remainder = time % cycleLength;

  if (cyclesCompleted % 2 === 0) {
    return remainder + 1;
  } else {
    return n - remainder;
  }
}
