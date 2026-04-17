export function solveQueries(nums: number[], queries: number[]): number[] {
  const positions = buildPositionsMap(nums);
  const n = nums.length;
  const result: number[] = [];

  for (const queryIndex of queries) {
    const value = nums[queryIndex];
    const indices = positions.get(value)!;

    if (indices.length === 1) {
      result.push(-1);
      continue;
    }

    const posInList = lowerBound(indices, queryIndex);
    const prevIndex = indices[(posInList - 1 + indices.length) % indices.length];
    const nextIndex = indices[(posInList + 1) % indices.length];

    const distanceToPrev = circularDistance(queryIndex, prevIndex, n);
    const distanceToNext = circularDistance(queryIndex, nextIndex, n);

    result.push(Math.min(distanceToPrev, distanceToNext));
  }

  return result;
}

function buildPositionsMap(nums: number[]): Map<number, number[]> {
  const positions = new Map<number, number[]>();

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (!positions.has(value)) {
      positions.set(value, []);
    }

    positions.get(value)!.push(i);
  }

  return positions;
}

function circularDistance(a: number, b: number, n: number): number {
  const direct = Math.abs(a - b);
  return Math.min(direct, n - direct);
}

function lowerBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
