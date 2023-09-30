export function countPalindromicSubsequence(s: string): number {
  let map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], []);
    }
    map.get(s[i])!.push(i);
  }
  let arr = Array.from(map);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let [_, positions] = arr[i];
    let first = positions[0];
    let last = positions[positions.length - 1];
    result += new Set(s.slice(first + 1, last).split("")).size;
  }
  return result;
}
