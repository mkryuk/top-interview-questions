export function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
  const n = edges1.length + 1;
  const m = edges2.length + 1;

  // build adjacency lists
  const adj1: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges1) {
    adj1[u].push(v);
    adj1[v].push(u);
  }
  const adj2: number[][] = Array.from({ length: m }, () => []);
  for (const [u, v] of edges2) {
    adj2[u].push(v);
    adj2[v].push(u);
  }

  // precompute ball‐sizes in tree1 for radius = k
  const count1 = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    count1[i] = bfsCount(adj1, i, k);
  }

  // precompute ball‐sizes in tree2 for radius = k-1, track the maximum
  let maxCount2 = 0;
  if (k > 0) {
    for (let j = 0; j < m; j++) {
      const c2 = bfsCount(adj2, j, k - 1);
      if (c2 > maxCount2) {
        maxCount2 = c2;
      }
    }
  }

  // answer for each i in tree1 is count1[i] + maxCount2
  return count1.map((c1) => c1 + maxCount2);
}

// count how many nodes are within 'radius' of 'start' in the given adjacency list
function bfsCount(adj: number[][], start: number, radius: number): number {
  if (radius < 0) {
    return 0;
  }
  const n = adj.length;
  const vis = new Array<boolean>(n).fill(false);
  const dist = new Array<number>(n).fill(0);
  const q: number[] = [];
  let head = 0,
    cnt = 0;

  vis[start] = true;
  q.push(start);

  while (head < q.length) {
    const u = q[head++];
    if (dist[u] > radius) continue;
    cnt++;
    for (const w of adj[u]) {
      if (!vis[w]) {
        vis[w] = true;
        dist[w] = dist[u] + 1;
        if (dist[w] <= radius) {
          q.push(w);
        }
      }
    }
  }
  return cnt;
}
