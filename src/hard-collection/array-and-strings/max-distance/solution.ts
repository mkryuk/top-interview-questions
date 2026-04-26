export function maxDistance(side: number, points: number[][], k: number): number {
  const positions = points.map((point) => toPerimeterPosition(point, side));
  positions.sort((a, b) => a - b);

  let left = 0;
  let right = side;

  while (left < right) {
    const middle = Math.floor((left + right + 1) / 2);
    if (canSelectWithDistance(positions, side, k, middle)) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

function toPerimeterPosition(point: number[], side: number): number {
  const x = point[0];
  const y = point[1];
  if (y === 0) {
    return x;
  }

  if (x === side) {
    return side + y;
  }

  if (y === side) {
    return 3 * side - x;
  }

  return 4 * side - y;
}

function canSelectWithDistance(positions: number[], side: number, k: number, distance: number): boolean {
  const n = positions.length;
  const perimeter = 4 * side;
  const doubled: number[] = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    doubled[i] = positions[i];
    doubled[i + n] = positions[i] + perimeter;
  }

  const next = buildNextArray(doubled, distance);
  for (let start = 0; start < n; start++) {
    if (canStartFrom(start, n, k, distance, perimeter, doubled, next)) {
      return true;
    }
  }

  return false;
}

function buildNextArray(values: number[], distance: number): number[] {
  const n = values.length;
  const next: number[] = new Array(n);
  let pointer = 0;

  for (let i = 0; i < n; i++) {
    if (pointer <= i) {
      pointer = i + 1;
    }

    while (pointer < n && values[pointer] - values[i] < distance) {
      pointer++;
    }
    next[i] = pointer;
  }
  return next;
}

function canStartFrom(
  start: number,
  n: number,
  k: number,
  distance: number,
  perimeter: number,
  values: number[],
  next: number[],
): boolean {
  let current = start;

  for (let selected = 1; selected < k; selected++) {
    current = next[current];
    if (current >= start + n) {
      return false;
    }
  }

  return values[start] + perimeter - values[current] >= distance;
}
