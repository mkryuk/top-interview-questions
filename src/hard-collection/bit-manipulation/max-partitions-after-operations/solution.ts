export function maxPartitionsAfterOperations(s: string, k: number): number {
  const n = s.length;
  const L: number[][] = Array.from({ length: n }, () => [0, 0, 0]);
  const R: number[][] = Array.from({ length: n }, () => [0, 0, 0]);

  let num = 0;
  let mask = 0;
  let cnt = 0;
  for (let i = 0; i < n - 1; i++) {
    const bitMask = 1 << (s.charCodeAt(i) - 97);
    if (!(mask & bitMask)) {
      cnt++;
      if (cnt <= k) {
        mask |= bitMask;
      } else {
        num++;
        mask = bitMask;
        cnt = 1;
      }
    }
    L[i + 1] = [num, mask, cnt];
  }

  num = mask = cnt = 0;
  for (let i = n - 1; i > 0; i--) {
    const bitMask = 1 << (s.charCodeAt(i) - 97);
    if (!(mask & bitMask)) {
      cnt++;
      if (cnt <= k) {
        mask |= bitMask;
      } else {
        num++;
        mask = bitMask;
        cnt = 1;
      }
    }
    R[i - 1] = [num, mask, cnt];
  }

  let maxVal = 0;
  for (let i = 0; i < n; i++) {
    let seg = L[i][0] + R[i][0] + 2;
    const split = L[i][1] | R[i][1];
    const count = split.toString(2).split("1").length - 1;

    if (L[i][2] === k && R[i][2] === k && count < 26) {
      seg += 1;
    } else if (Math.min(count + 1, 26) <= k) {
      seg -= 1;
    }
    maxVal = Math.max(maxVal, seg);
  }

  return maxVal;
}
