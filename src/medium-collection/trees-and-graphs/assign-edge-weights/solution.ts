export function assignEdgeWeights(edges: number[][]): number {
  const MOD = BigInt(1e9 + 7);
  const n = edges.length + 1;
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  const maxDepth = getMaxDepth(graph, n);
  return Number(modPow(2n, BigInt(maxDepth - 1), MOD));
}

function getMaxDepth(graph: number[][], n: number): number {
  const queue: number[] = [1];
  const depth: number[] = Array(n + 1).fill(-1);
  depth[1] = 0;
  let head = 0;
  let maxDepth = 0;
  while (head < queue.length) {
    const node = queue[head];
    head++;
    maxDepth = Math.max(maxDepth, depth[node]);
    for (const next of graph[node]) {
      if (depth[next] !== -1) {
        continue;
      }
      depth[next] = depth[node] + 1;
      queue.push(next);
    }
  }
  return maxDepth;
}

function modPow(base: bigint, exponent: bigint, mod: bigint): bigint {
  let result = 1n;
  let current = base % mod;
  let power = exponent;
  while (power > 0n) {
    if ((power & 1n) === 1n) {
      result = (result * current) % mod;
    }
    current = (current * current) % mod;
    power >>= 1n;
  }
  return result;
}
