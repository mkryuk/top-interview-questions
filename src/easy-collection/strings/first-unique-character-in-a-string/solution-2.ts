export function firstUniqChar(s: string): number {
  let result: { [k: string]: number[] } = {};

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      result[s[i]].push(i);
    } else {
      result[s[i]] = [i];
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]].length === 1) {
      return i;
    }
  }
  return -1;
}
