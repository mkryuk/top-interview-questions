export function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
  const MOD = 1e9 + 7;
  const n = edges.length + 1;
  const log = Math.ceil(Math.log2(n + 1)) + 1;
  const graph = buildGraph(n, edges);
  const depth = new Int32Array(n + 1);
  const up: Int32Array[] = Array.from({ length: log }, () => new Int32Array(n + 1));

  buildRootedTree(1, graph.head, graph.to, graph.next, depth, up[0]);
  buildBinaryLifting(up, n, log);

  const pow2 = buildPowersOfTwo(n, MOD);
  const result: number[] = [];

  for (const [u, v] of queries) {
    const ancestor = lca(u, v, depth, up, log);
    const distance = depth[u] + depth[v] - 2 * depth[ancestor];
    if (distance === 0) {
      result.push(0);
    } else {
      result.push(pow2[distance - 1]);
    }
  }

  return result;
}

function buildGraph(
  n: number,
  edges: number[][],
): {
  head: Int32Array;
  to: Int32Array;
  next: Int32Array;
} {
  const head = new Int32Array(n + 1);
  head.fill(-1);
  const to = new Int32Array(edges.length * 2);
  const next = new Int32Array(edges.length * 2);
  let edgeIndex = 0;

  for (const [u, v] of edges) {
    to[edgeIndex] = v;
    next[edgeIndex] = head[u];
    head[u] = edgeIndex;
    edgeIndex++;
    to[edgeIndex] = u;
    next[edgeIndex] = head[v];
    head[v] = edgeIndex;
    edgeIndex++;
  }

  return { head, to, next };
}

function buildRootedTree(
  root: number,
  head: Int32Array,
  to: Int32Array,
  next: Int32Array,
  depth: Int32Array,
  parent: Int32Array,
): void {
  const stack = new Int32Array(depth.length);
  let size = 0;
  stack[size] = root;
  size++;
  parent[root] = 0;
  depth[root] = 0;

  while (size > 0) {
    size--;
    const node = stack[size];
    for (let edge = head[node]; edge !== -1; edge = next[edge]) {
      const child = to[edge];
      if (child === parent[node]) {
        continue;
      }
      parent[child] = node;
      depth[child] = depth[node] + 1;
      stack[size] = child;
      size++;
    }
  }
}

function buildBinaryLifting(up: Int32Array[], n: number, log: number): void {
  for (let level = 1; level < log; level++) {
    const prev = up[level - 1];
    const curr = up[level];
    for (let node = 1; node <= n; node++) {
      curr[node] = prev[prev[node]];
    }
  }
}

function lca(a: number, b: number, depth: Int32Array, up: Int32Array[], log: number): number {
  if (depth[a] < depth[b]) {
    const temp = a;
    a = b;
    b = temp;
  }

  const diff = depth[a] - depth[b];

  for (let level = 0; level < log; level++) {
    if (((diff >> level) & 1) === 1) {
      a = up[level][a];
    }
  }

  if (a === b) {
    return a;
  }

  for (let level = log - 1; level >= 0; level--) {
    if (up[level][a] !== up[level][b]) {
      a = up[level][a];
      b = up[level][b];
    }
  }

  return up[0][a];
}

function buildPowersOfTwo(n: number, mod: number): number[] {
  const pow2 = new Array<number>(n + 1);
  pow2[0] = 1;
  for (let i = 1; i <= n; i++) {
    pow2[i] = (pow2[i - 1] * 2) % mod;
  }
  return pow2;
}
