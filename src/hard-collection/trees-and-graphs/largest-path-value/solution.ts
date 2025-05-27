export function largestPathValue(colors: string, edges: number[][]): number {
  const n = colors.length;
  const adj: number[][] = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);
  for (const [from, to] of edges) {
    adj[from].push(to);
    inDegree[to]++;
  }

  const dp = Array.from({ length: n }, () => new Array(26).fill(0));
  // start with all zero‐in‐degree nodes
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let head = 0;
  let seen = 0;
  let result = 0;
  while (head < queue.length) {
    const node = queue[head++];
    seen++;
    const colorIndex = colors.charCodeAt(node) - 97;
    // include node’s own color
    dp[node][colorIndex]++;
    result = Math.max(result, dp[node][colorIndex]);
    for (const neigh of adj[node]) {
      for (let c = 0; c < 26; c++) {
        if (dp[node][c] > dp[neigh][c]) {
          dp[neigh][c] = dp[node][c];
        }
      }
      inDegree[neigh]--;
      if (inDegree[neigh] === 0) {
        queue.push(neigh);
      }
    }
  }

  return seen === n ? result : -1;
}
