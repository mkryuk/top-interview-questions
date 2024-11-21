export function takeCharacters(s: string, k: number): number {
  if (k === 0) {
    return 0;
  }
  const total = new Map<string, number>();
  for (const ch of s) {
    total.set(ch, (total.get(ch) ?? 0) + 1);
  }
  if ((total.get("a") ?? 0) < k || (total.get("b") ?? 0) < k || (total.get("c") ?? 0) < k) {
    return -1;
  }

  const target = new Map<string, number>();
  target.set("a", total.get("a")! - k);
  target.set("b", total.get("b")! - k);
  target.set("c", total.get("c")! - k);

  let current = new Map<string, number>();
  let left = 0;
  let result = 0;
  const n = s.length;

  for (let right = 0; right < n; right++) {
    current.set(s[right], (current.get(s[right]) ?? 0) + 1);

    while (
      current.get("a")! > target.get("a")! ||
      current.get("b")! > target.get("b")! ||
      current.get("c")! > target.get("c")!
    ) {
      current.set(s[left], current.get(s[left])! - 1);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return n - result;
}
