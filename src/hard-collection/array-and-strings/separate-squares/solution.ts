export function separateSquares(squares: number[][]): number {
  // build events and x-coordinates
  const events: Event[] = [];
  const xs: number[] = [];

  for (let i = 0; i < squares.length; i++) {
    const x1 = squares[i][0];
    const y1 = squares[i][1];
    const l = squares[i][2];
    const x2 = x1 + l;
    const y2 = y1 + l;

    xs.push(x1);
    xs.push(x2);

    events.push({ y: y1, x1, x2, delta: 1 });
    events.push({ y: y2, x1, x2, delta: -1 });
  }

  xs.sort((a, b) => a - b);

  const uniqXs: number[] = [];
  for (let i = 0; i < xs.length; i++) {
    if (i === 0 || xs[i] !== xs[i - 1]) {
      uniqXs.push(xs[i]);
    }
  }

  // if only one unique x, there is no width anywhere
  if (uniqXs.length <= 1) {
    // any y at the bottom edge works; the minimum is the minimum yi
    let minY = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i][1] < minY) {
        minY = squares[i][1];
      }
    }
    return minY;
  }

  const xIndex = new Map<number, number>();
  for (let i = 0; i < uniqXs.length; i++) {
    xIndex.set(uniqXs[i], i);
  }

  events.sort((a, b) => a.y - b.y);

  const segTree = new SegmentTree(uniqXs);

  // sweep in y, producing constant-x-union-length vertical slabs
  const slabs: Slab[] = [];
  let prevY = events[0].y;
  let i = 0;

  while (i < events.length) {
    const currY = events[i].y;

    if (currY > prevY) {
      const lenX = segTree.coveredLength();
      slabs.push({ y0: prevY, y1: currY, lenX });
      prevY = currY;
    } else {
      prevY = currY;
    }

    while (i < events.length && events[i].y === currY) {
      const l = xIndex.get(events[i].x1)!;
      const r = xIndex.get(events[i].x2)!;

      if (l < r) {
        segTree.update(l, r, events[i].delta);
      }

      i++;
    }
  }

  // compute total union area
  let totalArea = 0;
  for (let s = 0; s < slabs.length; s++) {
    const h = slabs[s].y1 - slabs[s].y0;
    const a = slabs[s].lenX * h;

    totalArea += a;
  }

  const target = totalArea / 2.0;

  // find the minimum y where area below reaches target
  let acc = 0;

  for (let s = 0; s < slabs.length; s++) {
    const y0 = slabs[s].y0;
    const y1 = slabs[s].y1;
    const lenX = slabs[s].lenX;
    const h = y1 - y0;
    const area = lenX * h;

    if (acc + area < target) {
      acc += area;
      continue;
    }

    // target is within this slab (or at its start)
    const need = target - acc;

    if (need <= 0) {
      return y0;
    }

    if (lenX <= 0) {
      // no area accumulates in this slab; minimum y that achieves target is the start
      return y0;
    }

    const dy = need / lenX;
    const ans = y0 + dy;

    // clamp defensively inside [y0, y1]
    if (ans < y0) {
      return y0;
    }
    if (ans > y1) {
      return y1;
    }

    return ans;
  }

  // if target is exactly total area (should only happen with numerical edge cases), return the max y
  if (slabs.length === 0) {
    let minY = Infinity;
    for (let k = 0; k < squares.length; k++) {
      if (squares[k][1] < minY) {
        minY = squares[k][1];
      }
    }
    return minY;
  }

  return slabs[slabs.length - 1].y1;
}

type Event = {
  y: number;
  x1: number;
  x2: number;
  delta: number;
};

type Slab = {
  y0: number;
  y1: number;
  lenX: number;
};

// segment tree over x-intervals between consecutive unique x coordinates
class SegmentTree {
  private readonly xs: number[];
  private readonly nSeg: number;
  private readonly cover: number[];
  private readonly len: number[];

  public constructor(xs: number[]) {
    this.xs = xs;
    this.nSeg = xs.length - 1;

    const size = this.nSeg * 4 + 5;
    this.cover = new Array<number>(size);
    this.len = new Array<number>(size);

    for (let i = 0; i < size; i++) {
      this.cover[i] = 0;
      this.len[i] = 0;
    }
  }

  public coveredLength(): number {
    return this.len[1];
  }

  // update coverage count on segment indices [l, r)
  public update(l: number, r: number, delta: number): void {
    this.updateRec(1, 0, this.nSeg, l, r, delta);
  }

  private updateRec(node: number, nl: number, nr: number, ql: number, qr: number, delta: number): void {
    if (qr <= nl || nr <= ql) {
      return;
    }

    if (ql <= nl && nr <= qr) {
      this.cover[node] += delta;
      this.pull(node, nl, nr);
      return;
    }

    const mid = (nl + nr) >> 1;

    this.updateRec(node << 1, nl, mid, ql, qr, delta);
    this.updateRec((node << 1) | 1, mid, nr, ql, qr, delta);

    this.pull(node, nl, nr);
  }

  private pull(node: number, nl: number, nr: number): void {
    if (this.cover[node] > 0) {
      this.len[node] = this.xs[nr] - this.xs[nl];
      return;
    }

    if (nr - nl <= 1) {
      this.len[node] = 0;
      return;
    }

    this.len[node] = this.len[node << 1] + this.len[(node << 1) | 1];
  }
}
