export function minAreaRect(points: number[][]): number {
  // Create a map to store the x coordinates and corresponding y coordinates of the points
  let map = new Map<number, Set<number>>();

  // Iterate over the input array of points
  points.forEach(([x, y]) => {
    // If the current x coordinate is not already in the map, add it as a key
    if (!map.has(x)) {
      map.set(x, new Set());
    }
    // Add the current y coordinate to the set of y coordinates corresponding to the current x coordinate
    map.get(x)!.add(y);
  });

  // Initialize a variable to store the minimum area
  let min = Infinity;

  // Iterate over the input array of points
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      // Check if the current pair of points forms a rectangle
      if (
        x1 < x2 && // x1 must be less than x2
        y1 !== y2 && // y1 must be different from y2
        map.get(x1)!.has(y2) && // y2 must be in the set of y coordinates corresponding to x1
        map.get(x2)!.has(y1) // y1 must be in the set of y coordinates corresponding to x2
      ) {
        // Update the minimum area if the current pair of points forms a rectangle with a smaller area
        min = Math.min(min, Math.abs((x1 - x2) * (y1 - y2)));
      }
    }
  }
  // Return the minimum area, or 0 if no rectangle was found
  return min === Infinity ? 0 : min;
}
