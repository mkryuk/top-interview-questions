export function isOneBitCharacter(bits: number[]): boolean {
  let i = 0;
  while (i < bits.length - 1) {
    if (bits[i] === 0) {
      i++;
    } else {
      i += 2;
    }
  }
  return i === bits.length - 1;
}
