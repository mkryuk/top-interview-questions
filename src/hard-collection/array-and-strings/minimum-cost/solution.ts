export function minimumCost(
  source: string,
  target: string,
  original: string[],
  changed: string[],
  cost: number[],
): number {
  // large sentinel used as "infinite" cost in shortest path table
  const INF: number = Number.MAX_SAFE_INTEGER / 2;

  function add(node: Trie, word: string, index: { value: number }): number {
    // insert word into trie and return the terminal node id
    // each distinct word gets a unique id (assigned lazily the first time it appears)
    for (const ch of word) {
      const i = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (!node.child[i]) {
        node.child[i] = new Trie();
      }
      node = node.child[i]!;
    }
    if (node.id === -1) {
      node.id = ++index.value;
    }
    return node.id;
  }

  const n: number = source.length;
  const m: number = original.length;
  const root: Trie = new Trie();

  // p.value tracks the last assigned trie id, so number of assigned ids is p.value + 1
  const p = { value: -1 };

  // adjacency matrix over trie ids:
  // g[x][y] = cheapest direct rule cost to convert word-id x -> word-id y
  // note: m * 2 is an upper bound on unique endpoints (original + changed), but not necessarily tight
  const nodeCount: number = m * 2;
  const G: number[][] = Array.from({ length: nodeCount }, () => Array(nodeCount).fill(INF));

  // zero cost to keep the same word (important for floyd-warshall base cases)
  for (let i = 0; i < nodeCount; i++) {
    G[i][i] = 0;
  }

  for (let i = 0; i < m; i++) {
    // map each rule endpoint to ids in the trie
    const x: number = add(root, original[i], p);
    const y: number = add(root, changed[i], p);

    // multiple rules can exist for the same (x -> y), keep the minimum edge
    G[x][y] = Math.min(G[x][y], cost[i]);
  }

  // only ids in [0, size) were actually assigned, so we run floyd-warshall on that submatrix
  const size: number = p.value + 1;

  // floyd-warshall computes all-pairs shortest paths:
  // allows chaining multiple conversions on the *same interval* (same substring indices),
  // which is permitted by the problem statement
  for (let k = 0; k < size; k++) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        G[i][j] = Math.min(G[i][j], G[i][k] + G[k][j]);
      }
    }
  }

  // dp over positions:
  // f[i] = minimum cost to convert source[0..i] into target[0..i], or -1 if impossible
  const f: number[] = new Array(n).fill(-1);

  for (let j = 0; j < n; j++) {
    // if we can't reach prefix ending at j-1, we can't start a new disjoint segment at j
    if (j > 0 && f[j - 1] === -1) {
      continue;
    }

    // base cost for everything strictly before j
    const base: number = j === 0 ? 0 : f[j - 1];

    // option 1: do nothing at position j (only valid when characters already match)
    if (source[j] === target[j]) {
      if (f[j] === -1 || base < f[j]) {
        f[j] = base;
      }
    }

    // option 2: choose a disjoint interval [j..i] and convert whole substring at once
    // we walk both substrings through the trie in lockstep; if either path breaks, longer i won't work either
    let u: Trie | null = root;
    let v: Trie | null = root;

    for (let i = j; i < n; i++) {
      u = u?.child[source.charCodeAt(i) - "a".charCodeAt(0)] ?? null;
      v = v?.child[target.charCodeAt(i) - "a".charCodeAt(0)] ?? null;

      // no further endpoint words exist for this start position
      if (!u || !v) {
        break;
      }

      // only terminal nodes have ids, meaning these exact substrings appear as rule endpoints
      // then G[u.id][v.id] is the cheapest cost to convert this substring via any sequence of rules
      if (u.id !== -1 && v.id !== -1 && G[u.id][v.id] !== INF) {
        const newVal: number = base + G[u.id][v.id];

        // update dp for prefix ending at i using the chosen interval [j..i]
        if (f[i] === -1 || newVal < f[i]) {
          f[i] = newVal;
        }
      }
    }
  }

  // returns -1 if unreachable, as required
  return f[n - 1];
}

class Trie {
  child: (Trie | null)[];
  id: number;

  constructor() {
    // alphabet size (lowercase english letters)
    this.child = new Array(26).fill(null);

    // terminal node id for an endpoint word; -1 means "not an endpoint"
    this.id = -1;
  }
}
