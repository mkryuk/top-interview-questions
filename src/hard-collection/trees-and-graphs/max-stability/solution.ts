export function maxStability(n: number, edges: number[][], k: number): number {
  if (!validateMandatoryEdges(n, edges)) {
    return -1;
  }

  let left = 0;
  let right = 200000;
  let answer = -1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);

    if (canAchieveStability(n, edges, k, mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

class DSU {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x: number): number {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }

    return x;
  }

  union(a: number, b: number): boolean {
    let pa = this.find(a);
    let pb = this.find(b);

    if (pa === pb) {
      return false;
    }

    if (this.rank[pa] < this.rank[pb]) {
      const tmp = pa;
      pa = pb;
      pb = tmp;
    }

    this.parent[pb] = pa;

    if (this.rank[pa] === this.rank[pb]) {
      this.rank[pa]++;
    }

    return true;
  }

  isFullyConnected(): boolean {
    const root = this.find(0);

    for (let i = 1; i < this.parent.length; i++) {
      if (this.find(i) !== root) {
        return false;
      }
    }

    return true;
  }
}

function validateMandatoryEdges(n: number, edges: number[][]): boolean {
  const dsu = new DSU(n);
  let mandatoryEdgesCount = 0;

  for (const [u, v, , must] of edges) {
    if (must === 1) {
      mandatoryEdgesCount++;

      if (!dsu.union(u, v)) {
        // mandatory edges form a cycle
        return false;
      }
    }
  }

  if (mandatoryEdgesCount > n - 1) {
    return false;
  }

  return true;
}

function addMandatoryEdges(dsu: DSU, edges: number[][], target: number): boolean {
  for (const [u, v, strength, must] of edges) {
    if (must === 1) {
      if (strength < target) {
        return false;
      }

      dsu.union(u, v);
    }
  }

  return true;
}

function addFreeOptionalEdges(dsu: DSU, edges: number[][], target: number): void {
  for (const [u, v, strength, must] of edges) {
    if (must === 0 && strength >= target) {
      dsu.union(u, v);
    }
  }
}

function addUpgradeableEdges(dsu: DSU, edges: number[][], target: number, k: number): boolean {
  let upgradesUsed = 0;

  for (const [u, v, strength, must] of edges) {
    if (must === 0 && strength < target && strength * 2 >= target) {
      if (dsu.union(u, v)) {
        upgradesUsed++;

        if (upgradesUsed > k) {
          return false;
        }
      }
    }
  }

  return true;
}

function canAchieveStability(n: number, edges: number[][], k: number, target: number): boolean {
  const dsu = new DSU(n);

  if (!addMandatoryEdges(dsu, edges, target)) {
    return false;
  }

  addFreeOptionalEdges(dsu, edges, target);

  if (!addUpgradeableEdges(dsu, edges, target, k)) {
    return false;
  }

  return dsu.isFullyConnected();
}
