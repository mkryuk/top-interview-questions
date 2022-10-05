export function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set<string>(wordDict);
  const queue: number[] = [0];
  const visited: boolean[] = [];
  while (queue.length) {
    const start = queue.pop()!;
    if (visited[start]) {
      continue;
    }
    for (let end = start + 1; end <= s.length; end++) {
      if (wordSet.has(s.substring(start, end))) {
        if (end === s.length) {
          return true;
        }
        queue.push(end);
      }
    }
    visited[start] = true;
  }
  return false;
}
