export function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let strMap = new Map<string, number>();
  for (let right = 0, left = 0; right < s.length; right++) {
    if (strMap.has(s[right])) {
      // we will definitely have a value here
      // so `?? 0` is just for lint
      let index = strMap.get(s[right]) ?? 0;
      left = Math.max(index, left);
    }
    strMap.set(s[right], right + 1);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
