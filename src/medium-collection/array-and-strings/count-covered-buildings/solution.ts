export function countCoveredBuildings(n: number, buildings: number[][]): number {
  const rowMin: Map<number, number> = new Map();
  const rowMax: Map<number, number> = new Map();
  const colMin: Map<number, number> = new Map();
  const colMax: Map<number, number> = new Map();

  // compute min/max x per column and min/max y per row
  for (let i = 0; i < buildings.length; i++) {
    const [x, y] = buildings[i];

    // for row x, track min/max y
    updateMinMax(rowMin, rowMax, x, y);

    // for column y, track min/max x
    updateMinMax(colMin, colMax, y, x);
  }

  let coveredCount = 0;

  // check each building if it is covered
  for (let i = 0; i < buildings.length; i++) {
    const [x, y] = buildings[i];

    const rMin = rowMin.get(x)!;
    const rMax = rowMax.get(x)!;
    const cMin = colMin.get(y)!;
    const cMax = colMax.get(y)!;

    // building has left if rMin < y and right if rMax > y
    // building has above if cMin < x and below if cMax > x
    if (rMin < y && y < rMax && cMin < x && x < cMax) {
      coveredCount++;
    }
  }

  return coveredCount;
}

function updateMinMax(minMap: Map<number, number>, maxMap: Map<number, number>, key: number, value: number): void {
  // update min
  if (!minMap.has(key)) {
    minMap.set(key, value);
  } else {
    const currentMin = minMap.get(key)!;
    if (value < currentMin) {
      minMap.set(key, value);
    }
  }

  // update max
  if (!maxMap.has(key)) {
    maxMap.set(key, value);
  } else {
    const currentMax = maxMap.get(key)!;
    if (value > currentMax) {
      maxMap.set(key, value);
    }
  }
}
