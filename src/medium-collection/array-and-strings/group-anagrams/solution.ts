export function groupAnagrams(strs: string[]): string[][] {
  const strMap = new Map<string, string[]>();
  strs.forEach((s) => {
    const str = s.split("").sort().join();
    if (strMap.has(str)) {
      const temp = strMap.get(str) ?? [];
      temp.push(s);
      strMap.set(str, temp);
    } else {
      strMap.set(str, [s]);
    }
  });
  const result: string[][] = [];
  strMap.forEach((value) => result.push(value));
  return result;
}
