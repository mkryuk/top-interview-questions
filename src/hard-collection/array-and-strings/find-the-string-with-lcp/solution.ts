export function findTheString(lcp: number[][]): string {
  const n: number = lcp.length;

  // quick validation for shape and diagonal
  for (let i: number = 0; i < n; i++) {
    if (lcp[i].length !== n) {
      return "";
    }

    if (lcp[i][i] !== n - i) {
      return "";
    }
  }

  const dsu: DisjointSet = new DisjointSet(n);

  // if lcp[i][j] > 0, then word[i] must equal word[j]
  for (let i: number = 0; i < n; i++) {
    for (let j: number = i + 1; j < n; j++) {
      if (lcp[i][j] > 0) {
        dsu.union(i, j);
      }
    }
  }

  const chars: string[] = new Array<string>(n);
  const groupToChar: Map<number, string> = new Map<number, string>();
  let nextCharCode: number = "a".charCodeAt(0);

  // assign lexicographically smallest possible characters
  for (let i: number = 0; i < n; i++) {
    const root: number = dsu.find(i);

    if (!groupToChar.has(root)) {
      if (nextCharCode > "z".charCodeAt(0)) {
        return "";
      }

      groupToChar.set(root, String.fromCharCode(nextCharCode));
      nextCharCode++;
    }

    chars[i] = groupToChar.get(root)!;
  }

  const result: string = chars.join("");

  // rebuild the lcp matrix from the candidate string and compare
  if (!isValid(result, lcp)) {
    return "";
  }

  return result;
}

function isValid(word: string, lcp: number[][]): boolean {
  const n: number = word.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i: number = n - 1; i >= 0; i--) {
    for (let j: number = n - 1; j >= 0; j--) {
      if (word[i] === word[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = 0;
      }

      if (dp[i][j] !== lcp[i][j]) {
        return false;
      }
    }
  }

  return true;
}

class DisjointSet {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = new Array<number>(size);
    this.rank = new Array<number>(size).fill(0);

    for (let i: number = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  public find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  public union(a: number, b: number): void {
    const rootA: number = this.find(a);
    const rootB: number = this.find(b);

    if (rootA === rootB) {
      return;
    }

    if (this.rank[rootA] < this.rank[rootB]) {
      this.parent[rootA] = rootB;
    } else if (this.rank[rootA] > this.rank[rootB]) {
      this.parent[rootB] = rootA;
    } else {
      this.parent[rootB] = rootA;
      this.rank[rootA]++;
    }
  }
}
