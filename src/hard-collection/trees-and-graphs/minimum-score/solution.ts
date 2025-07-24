export function minimumScore(nums: number[], edges: number[][]): number {
  const n = nums.length;
  // build adjacency list
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // arrays for DFS
  const parent = new Array<number>(n).fill(-1);
  const subXor = new Array<number>(n).fill(0);
  const tin = new Array<number>(n).fill(0);
  const tout = new Array<number>(n).fill(0);
  const timer = { value: 0 };

  // root at 0
  dfs(0, -1, adj, nums, parent, subXor, tin, tout, timer);

  const totalXor = subXor[0];
  let answer = Number.MAX_SAFE_INTEGER;

  // all possible “cuts” correspond to removing the edge above nodes 1..n-1
  const removalNodes = Array.from({ length: n - 1 }, (_, i) => i + 1);

  for (let i = 0; i < removalNodes.length; i++) {
    const u = removalNodes[i];
    for (let j = i + 1; j < removalNodes.length; j++) {
      const v = removalNodes[j];
      let c1: number, c2: number, c3: number;

      if (isAncestor(u, v, tin, tout)) {
        // u above v
        c1 = subXor[v];
        c2 = subXor[u] ^ subXor[v];
        c3 = totalXor ^ subXor[u];
      } else if (isAncestor(v, u, tin, tout)) {
        // v above u
        c1 = subXor[u];
        c2 = subXor[v] ^ subXor[u];
        c3 = totalXor ^ subXor[v];
      } else {
        // disjoint subtrees
        c1 = subXor[u];
        c2 = subXor[v];
        c3 = totalXor ^ c1 ^ c2;
      }

      const mx = Math.max(c1, c2, c3);
      const mn = Math.min(c1, c2, c3);
      answer = Math.min(answer, mx - mn);
    }
  }

  return answer;
}

// DFS to compute parent[], subXor[], tin[], tout[]
function dfs(
  u: number,
  p: number,
  adj: number[][],
  nums: number[],
  parent: number[],
  subXor: number[],
  tin: number[],
  tout: number[],
  timer: { value: number },
): void {
  parent[u] = p;
  tin[u] = timer.value++;
  subXor[u] = nums[u];
  for (const v of adj[u]) {
    if (v === p) {
      continue;
    }
    dfs(v, u, adj, nums, parent, subXor, tin, tout, timer);
    subXor[u] ^= subXor[v];
  }
  tout[u] = timer.value++;
}

// check if a is an ancestor of b in the DFS tree
function isAncestor(a: number, b: number, tin: number[], tout: number[]): boolean {
  return tin[a] <= tin[b] && tout[b] <= tout[a];
}
