// Define the disjoint-set structure.
class UnionFind {
  root: number[];
  constructor(n: number) {
    this.root = [];
    for (let i = 0; i < n; ++i) {
      this.root[i] = i;
    }
  }
  find(x: number): number {
    return this.root[x] == x ? x : (this.root[x] = this.find(this.root[x]));
  }
  union(x: number, y: number): void {
    this.root[x] = this.root[y];
  }
}

export function getSkyline(buildings: number[][]): number[][] {
  // Sort the unique positions of all the edges.
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

  // Sort buildings by descending order of heights.
  buildings.sort((a, b) => b[2] - a[2]);

  // Initalize a disjoin set for all indexs, each index's
  // root is itself. Since there is no building added yet,
  // the height at each position is 0.
  const n = edges.length;
  const edgeUF = new UnionFind(n);
  const heights = new Array(n).fill(0);

  // Iterate over all the buildings by descending height.
  buildings.forEach(([leftEdge, rightEdge, height]) => {
    // For current x position, get the corresponding index.
    let leftIndex = edgeIndexMap.get(leftEdge)!;
    let rightIndex = edgeIndexMap.get(rightEdge)!;

    // While we haven't update the the root of 'left_idx':
    while (leftIndex < rightIndex) {
      // Find the root of left index 'left_idx', that is:
      // The rightmost index having the same height as 'left_idx'.
      leftIndex = edgeUF.find(leftIndex);

      // If left_idx < right_idx, we have to update both the root and height
      // of 'left_idx', and move on to the next index towards 'right_idx'.
      // That is: increment 'left_idx' by 1.
      if (leftIndex < rightIndex) {
        edgeUF.union(leftIndex, rightIndex);
        heights[leftIndex] = height;
        leftIndex++;
      }
    }
  });

  // Finally, we just need to iterate over updated heights, and
  // add every skyline key point to 'answer'.
  let answer: number[][] = [];
  for (let i = 0; i < n; ++i) {
    if (i == 0 || heights[i] != heights[i - 1]) answer.push([edges[i], heights[i]]);
  }
  return answer;
}
