export function latestDayToCross(row: number, col: number, cells: number[][]): number {
  const n: number = row * col;
  const top: number = n;
  const bottom: number = n + 1;

  let dsuParent = new Array(n + 2);
  let dsuSize = new Array(n + 2);

  for (let i = 0; i < n + 2; i++) {
    dsuParent[i] = i;
    dsuSize[i] = 1;
  }

  const land: number[] = new Array(n);
  const dr: number[] = [-1, 1, 0, 0];
  const dc: number[] = [0, 0, -1, 1];

  for (let i = n - 1; i >= 0; i--) {
    const r: number = cells[i][0] - 1;
    const c: number = cells[i][1] - 1;
    const id: number = r * col + c;

    land[id] = 1;

    if (r === 0) {
      union(id, top, dsuParent, dsuSize);
      ``;
    }

    if (r === row - 1) {
      union(id, bottom, dsuParent, dsuSize);
    }

    for (let k = 0; k < 4; k++) {
      const nr: number = r + dr[k];
      const nc: number = c + dc[k];

      if (nr >= 0 && nr < row && nc >= 0 && nc < col) {
        const nid: number = nr * col + nc;

        if (land[nid] === 1) {
          union(id, nid, dsuParent, dsuSize);
        }
      }
    }

    if (find(top, dsuParent) === find(bottom, dsuParent)) {
      return i;
    }
  }

  return 0;
}

function find(a: number, dsuParent: number[]): number {
  let x: number = a;

  while (dsuParent[x] !== x) {
    dsuParent[x] = dsuParent[dsuParent[x]];
    x = dsuParent[x];
  }

  return x;
}

function union(a: number, b: number, dsuParent: number[], dsuSize: number[]): void {
  let ra: number = find(a, dsuParent);
  let rb: number = find(b, dsuParent);

  if (ra === rb) {
    return;
  }

  if (dsuSize[ra] < dsuSize[rb]) {
    const t: number = ra;
    ra = rb;
    rb = t;
  }

  dsuParent[rb] = ra;
  dsuSize[ra] += dsuSize[rb];
}
