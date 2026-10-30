export function palindromePath(n: number, edges: number[][], s: string, queries: string[]): boolean[] {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const parent = new Int32Array(n);
  const depth = new Int32Array(n);
  const size = new Int32Array(n);
  const heavy = new Int32Array(n);

  parent.fill(-1);
  heavy.fill(-1);

  buildTree(graph, parent, depth, size, heavy);

  const head = new Int32Array(n);
  const position = new Int32Array(n);

  buildHLD(graph, parent, heavy, head, position);

  const values = new Int32Array(n);
  const chars = s.split("");

  for (let node = 0; node < n; node++) {
    values[position[node]] = charMask(chars[node]);
  }

  const segmentTree = new XorSegmentTree(values);
  const answer: boolean[] = [];

  for (const query of queries) {
    const parts = query.split(" ");

    if (parts[0] === "update") {
      const node = Number(parts[1]);
      const c = parts[2];

      chars[node] = c;
      segmentTree.update(position[node], charMask(c));
    } else {
      const u = Number(parts[1]);
      const v = Number(parts[2]);

      const mask = queryPath(u, v, parent, depth, head, position, segmentTree);

      // a palindrome can have at most one odd-frequency character
      answer.push((mask & (mask - 1)) === 0);
    }
  }

  return answer;
}

function charMask(c: string): number {
  return 1 << (c.charCodeAt(0) - 97);
}

function buildTree(
  graph: number[][],
  parent: Int32Array,
  depth: Int32Array,
  size: Int32Array,
  heavy: Int32Array,
): void {
  const n = graph.length;
  const order: number[] = [0];

  parent[0] = -1;

  // iterative dfs avoids recursion-depth issues in typescript
  for (let i = 0; i < order.length; i++) {
    const node = order[i];

    for (const next of graph[node]) {
      if (next === parent[node]) {
        continue;
      }

      parent[next] = node;
      depth[next] = depth[node] + 1;
      order.push(next);
    }
  }

  // process children before parents
  for (let i = n - 1; i >= 0; i--) {
    const node = order[i];

    size[node] = 1;

    let largestSubtree = 0;

    for (const next of graph[node]) {
      if (parent[next] !== node) {
        continue;
      }

      size[node] += size[next];

      if (size[next] > largestSubtree) {
        largestSubtree = size[next];
        heavy[node] = next;
      }
    }
  }
}

function buildHLD(
  graph: number[][],
  parent: Int32Array,
  heavy: Int32Array,
  head: Int32Array,
  position: Int32Array,
): void {
  let currentPosition = 0;

  const stack: Array<[number, number]> = [[0, 0]];

  while (stack.length > 0) {
    const [start, chainHead] = stack.pop()!;

    let node = start;

    while (node !== -1) {
      head[node] = chainHead;
      position[node] = currentPosition++;

      // light children start new chains
      for (const next of graph[node]) {
        if (parent[next] === node && next !== heavy[node]) {
          stack.push([next, next]);
        }
      }

      node = heavy[node];
    }
  }
}

function queryPath(
  startU: number,
  startV: number,
  parent: Int32Array,
  depth: Int32Array,
  head: Int32Array,
  position: Int32Array,
  segmentTree: XorSegmentTree,
): number {
  let u = startU;
  let v = startV;
  let result = 0;

  while (head[u] !== head[v]) {
    if (depth[head[u]] < depth[head[v]]) {
      const temp = u;
      u = v;
      v = temp;
    }
    result ^= segmentTree.query(position[head[u]], position[u]);
    u = parent[head[u]];
  }

  if (depth[u] > depth[v]) {
    const temp = u;
    u = v;
    v = temp;
  }

  // u and v are now in the same heavy chain
  result ^= segmentTree.query(position[u], position[v]);
  return result;
}

class XorSegmentTree {
  private readonly size: number;
  private readonly tree: Int32Array;

  constructor(values: Int32Array) {
    let size = 1;

    while (size < values.length) {
      size <<= 1;
    }

    this.size = size;
    this.tree = new Int32Array(size << 1);

    for (let i = 0; i < values.length; i++) {
      this.tree[size + i] = values[i];
    }

    for (let i = size - 1; i > 0; i--) {
      this.tree[i] = this.tree[i << 1] ^ this.tree[(i << 1) | 1];
    }
  }

  update(index: number, value: number): void {
    let pos = this.size + index;
    this.tree[pos] = value;
    pos >>= 1;

    while (pos > 0) {
      this.tree[pos] = this.tree[pos << 1] ^ this.tree[(pos << 1) | 1];
      pos >>= 1;
    }
  }

  query(left: number, right: number): number {
    let l = left + this.size;
    let r = right + this.size;
    let result = 0;

    while (l <= r) {
      if ((l & 1) === 1) {
        result ^= this.tree[l];
        l++;
      }

      if ((r & 1) === 0) {
        result ^= this.tree[r];
        r--;
      }

      l >>= 1;
      r >>= 1;
    }

    return result;
  }
}
