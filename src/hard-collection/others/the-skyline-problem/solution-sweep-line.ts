export function getSkyline(buildings: number[][]): number[][] {
  // Collect and sort the unique positions of all the edges.
  const edgeSet = new Set<number>();
  // Put all edges to the Set
  buildings.forEach(([left, right]) => {
    edgeSet.add(left);
    edgeSet.add(right);
  });

  // const edges = Array.from(edgeSet);
  // edges.sort((a, b) => a - b);
  const edges = Array.from(edgeSet);
  edges.sort((a, b) => a - b);

  // 'answer' for skyline key points.
  const answer = new Array();

  // For each position, draw an imaginary vertical line.
  edges.forEach((edge) => {
    // The current max height.
    let maxHeight = 0;

    // Iterate over all the buildings:
    buildings.forEach(([left, right, height]) => {
      // If the current building intersects with the line,
      // update 'maxHeight'.
      if (left <= edge && edge < right) {
        maxHeight = Math.max(maxHeight, height);
      }
    });

    // If its the first key point or the height changes,
    // we add [position, maxHeight] to 'answer'.
    if (answer.length === 0 || answer[answer.length - 1][1] !== maxHeight) {
      answer.push([edge, maxHeight]);
    }
  });

  // Return 'answer' as the skyline.
  return answer;
}
