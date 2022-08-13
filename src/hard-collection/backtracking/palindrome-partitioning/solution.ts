export function partition(s: string): string[][] {
  const result: string[][] = [];
  dfs(0, result, [], s);
  return result;
}

function dfs(
  start: number,
  result: string[][],
  currentList: string[],
  s: string,
): void {
  if (start >= s.length) {
    result.push([...currentList]);
  }
  for (let end = start; end < s.length; end++) {
    if (isPalindrome(s, start, end)) {
      const res = s.substring(start, end + 1);
      currentList.push(res);
      dfs(end + 1, result, currentList, s);
      currentList.pop();
    }
  }
}

function isPalindrome(s: string, start: number, end: number): boolean {
  while (start < end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
}
