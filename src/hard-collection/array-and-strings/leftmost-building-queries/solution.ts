export function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
  const n = heights.length;
  const q = queries.length;
  const result = new Array(q).fill(-1);
  const monoStack: Pair[] = [];
  const newQueries: Pair[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    newQueries[i] = [];
  }
  for (let i = 0; i < q; i++) {
    let [a, b] = queries[i];
    if (a > b) {
      [a, b] = [b, a];
    }
    if (heights[b] > heights[a] || a === b) {
      result[i] = b;
    } else {
      // we will try to find a building "leftmost" from b
      // that has height > heights[a].
      newQueries[b].push({ height: heights[a], index: i });
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    const monoStackSize = monoStack.length;
    for (const pair of newQueries[i]) {
      const pos = search(pair.height, monoStack);
      if (pos >= 0 && pos < monoStackSize) {
        result[pair.index] = monoStack[pos].index;
      }
    }
    while (monoStack.length > 0 && monoStack[monoStack.length - 1].height <= heights[i]) {
      monoStack.pop();
    }
    monoStack.push({ height: heights[i], index: i });
  }
  return result;
}

function search(height: number, monoStack: Pair[]): number {
  let left = 0;
  let right = monoStack.length - 1;
  let position = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (monoStack[mid].height > height) {
      position = Math.max(position, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return position;
}

type Pair = {
  height: number;
  index: number;
};
