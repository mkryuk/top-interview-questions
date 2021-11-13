export function firstUniqChar(s: string): number {
  let result: { [k: string]: number[] } = {};

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      result[s[i]].push(i);
    } else {
      result[s[i]] = [i];
    }
  }
  const key = Object.keys(result).find((k) => result[k].length === 1);
  return key === undefined ? -1 : result[key][0];
}
