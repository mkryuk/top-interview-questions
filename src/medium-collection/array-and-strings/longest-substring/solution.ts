export function lengthOfLongestSubstring(s: string): number {
  let jumpMap = new Map<string, number>();
  let jumpTable = new Array(s.length).fill(0);
  // we create map where to jump when we found duplicate character
  // for instance for "dvdfa" we will have [0, 0, 1, 0, 0]
  // that means that after we get second d
  // we should start to check from 1 index
  for (let i = 0; i < s.length; i++) {
    if (jumpMap.has(s[i])) {
      const index = jumpMap.get(s[i]) ?? 0;
      jumpTable[i] = index + 1;
    }
    jumpMap.set(s[i], i);
  }
  let strMap = new Set<string>();
  let longest = 0;
  let currentLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (strMap.has(s[i])) {
      strMap = new Set<string>();
      currentLength = 1;
      if (jumpTable[i] !== 0) {
        let ti = i;
        i = jumpTable[i];
        jumpTable[ti] = 0;
      }
    } else {
      currentLength++;
    }
    strMap.add(s[i]);
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}
