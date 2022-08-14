export function partition(s: string): string[][] {
  const result: string[][] = [];
  const len = s.length;
  // we use a 2d array to store the result
  // of checking if substring start -> end is a palindrome
  // then substring start+1 -> end-1 is a palindrome too
  const pt: boolean[][] = new Array(len);
  for (let i = 0; i < len; i++) {
    pt[i] = new Array(len).fill(false);
  }
  dfs(0, result, [], s, pt);
  return result;
}

function dfs(
  start: number,
  result: string[][],
  currentList: string[],
  s: string,
  pt: boolean[][],
): void {
  if (start >= s.length) {
    result.push([...currentList]);
  }
  for (let end = start; end < s.length; end++) {
    // a substring is a palindrome if s[start][end] are equal and pt[start+1][end-1] is true
    if (s[start] === s[end] && (end - start <= 2 || pt[start + 1][end - 1])) {
      pt[start][end] = true;
      const res = s.substring(start, end + 1);
      currentList.push(res);
      dfs(end + 1, result, currentList, s, pt);
      currentList.pop();
    }
  }
}
