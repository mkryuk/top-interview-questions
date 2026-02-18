export function readBinaryWatch(turnedOn: number): string[] {
  const result: string[] = [];
  for (let h = 0; h < 12; h++) {
    const hourBits = countBits(h);
    for (let m = 0; m < 60; m++) {
      const minuteBits = countBits(m);
      if (hourBits + minuteBits === turnedOn) {
        result.push(formatTime(h, m));
      }
    }
  }
  return result;
}

function countBits(num: number) {
  let count = 0;
  while (num > 0) {
    num &= num - 1;
    count++;
  }
  return count;
}

function formatTime(h: number, m: number) {
  const mm = m < 10 ? `0${m}` : m;
  return `${h}:${mm}`;
}
