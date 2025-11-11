export function minOperations(nums: number[]): number {
  const s = [];
  let res = 0;
  for (const a of nums) {
    while (s.length && s[s.length - 1] > a) {
      s.pop();
    }
    if (a === 0) {
      continue;
    }
    if (!s.length || s[s.length - 1] < a) {
      res++;
      s.push(a);
    }
  }
  return res;
}
