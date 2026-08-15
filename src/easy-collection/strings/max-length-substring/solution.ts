export function maximumLengthSubstring(s: string): number {
  const count: number[] = new Array(26).fill(0);
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    const rightIndex = s.charCodeAt(right) - 97;
    count[rightIndex]++;

    // shrink the window until s[right] occurs at most twice
    while (count[rightIndex] > 2) {
      const leftIndex = s.charCodeAt(left) - 97;
      count[leftIndex]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }

  return result;
}
