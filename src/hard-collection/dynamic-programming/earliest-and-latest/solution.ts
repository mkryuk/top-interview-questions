export function earliestAndLatest(n: number, firstPlayer: number, secondPlayer: number): [number, number] {
  // counts of other players on left, middle, right
  const L0 = firstPlayer - 1;
  const M0 = secondPlayer - firstPlayer - 1;
  const R0 = n - secondPlayer;
  const memoMin = new Map<string, number>(); // cache for earliest
  const memoMax = new Map<string, number>(); // cache for latest

  const earliest = dfsMin(L0, M0, R0, memoMin);
  const latest = dfsMax(L0, M0, R0, memoMax);
  return [earliest, latest];
}

enum Group {
  G1 = "g1", // players left of first star
  G2 = "g2", // players between stars
  G3 = "g3", // players right of second star
  F = "f", // first star player
  S = "s", // second star player
}

// determine which group a position belongs to
type tallyResult = [
  number,
  number,
  number, // n11, n22, n33
  number,
  number,
  number, // n12, n13, n23
  number,
  number,
  number, // b1, b2, b3
];

function getGroup(pos: number, L: number, M: number, R: number): Group {
  if (pos <= L) {
    return Group.G1;
  }
  if (pos === L + 1) {
    return Group.F;
  }
  if (pos <= L + 1 + M) {
    return Group.G2;
  }
  if (pos === L + M + 2) {
    return Group.S;
  }
  return Group.G3;
}

// find earliest round via DFS + memo
function dfsMin(L: number, M: number, R: number, memo: Map<string, number>): number {
  const key = `${L},${M},${R}`;
  if (memo.has(key)) {
    return memo.get(key)!;
  }
  if (L === R) {
    // they meet now
    return 1;
  }

  const [n11, n22, n33, n12, n13, n23, b1, b2, b3] = tally(L, M, R);
  let best = Infinity;
  // choose outcomes to minimize future rounds
  for (let u12 = 0; u12 <= n12; u12++) {
    for (let u13 = 0; u13 <= n13; u13++) {
      for (let u23 = 0; u23 <= n23; u23++) {
        const L2 = n11 + u12 + u13 + b1;
        const M2 = n22 + (n12 - u12) + u23 + b2;
        const R2 = n33 + (n13 - u13) + (n23 - u23) + b3;
        best = Math.min(best, dfsMin(L2, M2, R2, memo));
      }
    }
  }

  memo.set(key, 1 + best);
  return 1 + best;
}

// find latest round via DFS + memo
function dfsMax(L: number, M: number, R: number, memo: Map<string, number>): number {
  const key = `${L},${M},${R}`;
  if (memo.has(key)) {
    return memo.get(key)!;
  }
  if (L === R) {
    // they meet now
    return 1;
  }

  const [n11, n22, n33, n12, n13, n23, b1, b2, b3] = tally(L, M, R);
  let best = -Infinity;
  // choose outcomes to maximize future rounds
  for (let u12 = 0; u12 <= n12; u12++) {
    for (let u13 = 0; u13 <= n13; u13++) {
      for (let u23 = 0; u23 <= n23; u23++) {
        const L2 = n11 + u12 + u13 + b1;
        const M2 = n22 + (n12 - u12) + u23 + b2;
        const R2 = n33 + (n13 - u13) + (n23 - u23) + b3;
        best = Math.max(best, dfsMax(L2, M2, R2, memo));
      }
    }
  }

  memo.set(key, 1 + best);
  return 1 + best;
}

// count matches within and across groups, plus byes
type tallyFull = [
  number,
  number,
  number, // n11, n22, n33
  number,
  number,
  number, // n12, n13, n23
  number,
  number,
  number, // b1, b2, b3
  number, // k = number of pairs
];

function tally(L: number, M: number, R: number): tallyResult {
  const N = L + M + R + 2;
  const k = Math.floor(N / 2);
  const hasBye = N % 2 === 1;
  let n11 = 0,
    n22 = 0,
    n33 = 0;
  let n12 = 0,
    n13 = 0,
    n23 = 0;
  let b1 = 0,
    b2 = 0,
    b3 = 0;

  if (hasBye) {
    const mid = k + 1;
    if (mid <= L) {
      b1 = 1;
    } else if (mid <= L + 1 + M && mid > L + 1) {
      b2 = 1;
    } else if (mid > L + M + 2) {
      b3 = 1;
    }
  }

  // pair up positions i and N+1-i
  for (let i = 1; i <= k; i++) {
    const j = N + 1 - i;
    const g1 = getGroup(i, L, M, R);
    const g2 = getGroup(j, L, M, R);
    if (g1 === Group.F || g1 === Group.S || g2 === Group.F || g2 === Group.S) {
      continue;
    }
    if (g1 === Group.G1 && g2 === Group.G1) {
      n11++;
    } else if ((g1 === Group.G1 && g2 === Group.G2) || (g1 === Group.G2 && g2 === Group.G1)) {
      n12++;
    } else if ((g1 === Group.G1 && g2 === Group.G3) || (g1 === Group.G3 && g2 === Group.G1)) {
      n13++;
    } else if (g1 === Group.G2 && g2 === Group.G2) {
      n22++;
    } else if ((g1 === Group.G2 && g2 === Group.G3) || (g1 === Group.G3 && g2 === Group.G2)) {
      n23++;
    } else if (g1 === Group.G3 && g2 === Group.G3) {
      n33++;
    }
  }

  return [n11, n22, n33, n12, n13, n23, b1, b2, b3];
}
