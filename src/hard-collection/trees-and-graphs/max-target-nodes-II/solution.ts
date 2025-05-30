export function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const adj1: number[][] = Array.from({ length: n }, () => []);
  for (const [from, to] of edges1) {
    adj1[from].push(to);
    adj1[to].push(from);
  }

  const adj2: number[][] = Array.from({ length: m }, () => []);
  for (const [from, to] of edges2) {
    adj2[from].push(to);
    adj2[to].push(from);
  }

  // compute parity arrays using the standalone helper
  const p1 = computeParity(adj1, n);
  const p2 = computeParity(adj2, m);

  // count parity groups in each tree
  const size0_1 = p1.reduce((cnt, b) => cnt + (b === 0 ? 1 : 0), 0);
  const size1_1 = n - size0_1;
  const size0_2 = p2.reduce((cnt, b) => cnt + (b === 0 ? 1 : 0), 0);
  const size1_2 = m - size0_2;

  // best we can do in tree2 is the larger parity group (odd-distance after connect)
  const bestOdd2 = Math.max(size0_2, size1_2);

  const result = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    const even1 = p1[i] === 0 ? size0_1 : size1_1;
    result[i] = even1 + bestOdd2;
  }

  return result;
}

function computeParity(adj: number[][], size: number): number[] {
  const p = new Array<number>(size).fill(-1);
  const queue: number[] = [0];
  p[0] = 0;
  let qi = 0;
  while (qi < queue.length) {
    const u = queue[qi++];
    for (const w of adj[u]) {
      if (p[w] === -1) {
        p[w] = p[u] ^ 1;
        queue.push(w);
      }
    }
  }
  return p;
}
