export function groupAnagrams(strs: string[]): string[][] {
  const strMap = new Map<number, string[]>();
  const result: string[][] = [];
  strs.forEach((s) => {
    const length = s.length;
    if (strMap.has(length)) {
      const temp = strMap.get(length) ?? [];
      temp.push(s);
      strMap.set(length, temp);
    } else {
      strMap.set(length, [s]);
    }
  });

  strMap.forEach((strings) => {
    let temp = strings;
    while (temp.length) {
      const first = temp.pop() ?? "";
      let tempResult = [];
      tempResult.push(first);
      temp = temp.filter((s) => {
        if (areAnagrams(first, s)) {
          tempResult.push(s);
          return false;
        }
        return true;
      });
      result.push(tempResult);
    }
  });
  return result;
}

function areAnagrams(str1: string, str2: string) {
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
