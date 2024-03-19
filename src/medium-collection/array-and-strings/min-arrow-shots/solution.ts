export function findMinArrowShots(points: number[][]): number {
  points.sort(([as, ae], [bs, be]) => ae - be);
  // Start with the assumption that we need as many arrows as there are balloons,
  // intending to reduce this number by finding overlapping balloons.
  let result = points.length;

  // Iterate through the sorted list of points.
  for (let i = 0; i < points.length; i++) {
    // The current balloon under consideration.
    let balloon = points[i];

    // While there is a next balloon and the current balloon's end is greater than or equal
    // to the next balloon's start, it indicates an overlap. Thus, these can be burst with the same arrow.
    while (i < points.length - 1 && balloon[1] >= points[i + 1][0]) {
      // Since these balloons overlap, decrement the result as one less arrow is needed.
      result--;

      // Move to the next balloon, as the current arrow will also burst it.
      i++;
    }
  }
  return result;
}
