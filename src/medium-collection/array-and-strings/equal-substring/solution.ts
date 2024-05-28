export function equalSubstring(s: string, t: string, maxCost: number): number {
  let result = 0;
  let sum = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    sum += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    while (sum > maxCost) {
      sum -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
}
