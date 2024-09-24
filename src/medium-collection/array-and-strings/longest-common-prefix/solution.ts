export function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let arr1Prefixes = new Set<string>();
  // create all possible prefixes from arr1
  for (const num of arr1) {
    const numStr = num.toString();
    for (let i = 1; i <= numStr.length; i++) {
      const prefix = numStr.substring(0, i);
      arr1Prefixes.add(prefix);
    }
  }

  let result = 0;
  // check if any prefix from arr2 matches
  for (const num of arr2) {
    const numStr = num.toString();
    for (let i = 1; i <= numStr.length; i++) {
      const prefix = numStr.substring(0, i);
      if (arr1Prefixes.has(prefix)) {
        result = Math.max(result, i);
      }
    }
  }
  return result;
}
