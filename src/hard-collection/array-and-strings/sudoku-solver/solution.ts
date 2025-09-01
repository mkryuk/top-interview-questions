const FULL: number = 0x1ff; // 9 ones => all digits allowed
const rows = new Uint16Array(9);
const cols = new Uint16Array(9);
const boxes = new Uint16Array(9);
const empties: Array<[number, number]> = [];

export function solveSudoku(board: string[][]): void {
  // reset global state
  empties.length = 0;
  rows.fill(0);
  cols.fill(0);
  boxes.fill(0);

  // init masks and empties
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const ch = board[r][c];
      if (ch === ".") {
        empties.push([r, c]);
      } else {
        const d = ch.charCodeAt(0) - 48;
        const bit = 1 << (d - 1);
        const b = boxId(r, c);
        rows[r] |= bit;
        cols[c] |= bit;
        boxes[b] |= bit;
      }
    }
  }

  dfs(board, 0);
}

function boxId(r: number, c: number): number {
  return ((r / 3) | 0) * 3 + ((c / 3) | 0);
}

// count set bits for a 9-bit number
function popcount(n: number): number {
  let c = 0;
  while (n !== 0) {
    n &= n - 1;
    c++;
  }
  return c;
}

// iterate bits from low to high and yield digit 1..9
function* digitsFromMask(mask: number): Generator<number> {
  let m = mask;
  while (m !== 0) {
    const bit = m & -m;
    let idx = 0;
    let t = bit;
    while (t > 1) {
      t >>= 1;
      idx++;
    }
    yield idx + 1;
    m ^= bit;
  }
}

// place a digit and update masks
function place(board: string[][], r: number, c: number, d: number): void {
  const bit = 1 << (d - 1);
  board[r][c] = String(d);
  rows[r] |= bit;
  cols[c] |= bit;
  boxes[boxId(r, c)] |= bit;
}

// remove a digit and roll back masks
function remove(board: string[][], r: number, c: number, d: number): void {
  const bit = 1 << (d - 1);
  board[r][c] = ".";
  rows[r] &= ~bit;
  cols[c] &= ~bit;
  boxes[boxId(r, c)] &= ~bit;
}

// core dfs with "minimum remaining values" heuristic
function dfs(board: string[][], depth: number): boolean {
  if (depth === empties.length) {
    return true;
  }

  // pick the next cell that has the fewest candidates
  let best = depth;
  let bestCount = 10;
  for (let i = depth; i < empties.length; i++) {
    const [r, c] = empties[i];
    if (board[r][c] !== ".") {
      continue;
    }
    const forbid = rows[r] | cols[c] | boxes[boxId(r, c)];
    const availMask = ~forbid & FULL;
    const cnt = popcount(availMask);
    if (cnt < bestCount) {
      best = i;
      bestCount = cnt;
      if (cnt === 1) {
        break;
      }
    }
  }

  if (bestCount === 0) {
    return false;
  }

  if (best !== depth) {
    const tmp = empties[depth];
    empties[depth] = empties[best];
    empties[best] = tmp;
  }

  const [r0, c0] = empties[depth];
  const forbid = rows[r0] | cols[c0] | boxes[boxId(r0, c0)];
  const availMask = ~forbid & FULL;

  for (const d of digitsFromMask(availMask)) {
    place(board, r0, c0, d);
    if (dfs(board, depth + 1)) {
      return true;
    } else {
      remove(board, r0, c0, d);
    }
  }

  return false;
}
