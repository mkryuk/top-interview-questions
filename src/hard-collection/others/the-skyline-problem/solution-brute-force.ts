export function getSkyline(buildings: number[][]): number[][] {
  const edgeSet = new Set<number>();
  // Put all edges to the Set
  buildings.forEach(([left, right]) => {
    edgeSet.add(left);
    edgeSet.add(right);
  });

  const edges = Array.from(edgeSet);
  edges.sort((a, b) => a - b);
  const edgeIndexMap = new Map<number, number>();
  for (let i = 0; i < edges.length; i++) {
    edgeIndexMap.set(edges[i], i);
  }

  const heights = new Array(edges.length).fill(0);

  // Iterate over all the buildings.
  buildings.forEach(([left, right, height]) => {
    // For each building, find the indexes of its left
    // and right edges.
    const leftIndex = edgeIndexMap.get(left)!;
    const rightIndex = edgeIndexMap.get(right)!;

    // Update the maximum height within the range [left_idx, right_idx)
    for (let idx = leftIndex; idx < rightIndex; ++idx) {
      heights[idx] = Math.max(heights[idx], height);
    }
  });

  let result: number[][] = [];
  for (let i = 0; i < heights.length; ++i) {
    const currHeight = heights[i];
    const currPos = edges[i];

    // Add all the positions where the height changes to 'answer'.
    if (result.length === 0 || result[result.length - 1][1] !== currHeight) {
      result.push([currPos, currHeight]);
    }
  }
  return result;
}
