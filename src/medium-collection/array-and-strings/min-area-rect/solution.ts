export function minAreaRect(points: number[][]): number {
  // Sort the points based on x-coordinates, if x-coordinates are same then sort based on y-coordinates
  points.sort(([ax, ay], [bx, by]) => (ax === bx ? ay - by : ax - bx));

  // Create a map to store the y-coordinates of points with the same x-coordinate
  let yCoordinatesByX = new Map<number, number[]>();

  for (let i = 0; i < points.length - 1; i++) {
    let yCoordinates = [points[i][1]];
    // Collect all y-coordinates of points that have the same x-coordinate
    while (i < points.length - 1 && points[i][0] === points[i + 1][0]) {
      yCoordinates.push(points[++i][1]);
    }
    if (yCoordinates.length > 1) {
      yCoordinatesByX.set(points[i][0], yCoordinates);
    }
  }

  // Create a map to store the intervals (difference between y-coordinates) between the points with the same x-coordinate
  let intervalsByX = new Map<string, number[]>();

  yCoordinatesByX.forEach((yCoordinates, x) => {
    for (let i = 0; i < yCoordinates.length; i++) {
      for (let k = i + 1; k < yCoordinates.length; k++) {
        const key = `${yCoordinates[i]}-${yCoordinates[k]}`;
        if (!intervalsByX.has(key)) {
          // Store the height of the interval as the first value
          intervalsByX.set(key, [yCoordinates[k] - yCoordinates[i]]);
        }
        intervalsByX.get(key)!.push(x);
      }
    }
  });

  // Set the result to infinity as a placeholder
  let result = Infinity;

  intervalsByX.forEach((values, key) => {
    let height = values[0];
    for (let i = 1; i < values.length - 1; i++) {
      result = Math.min(result, height * (values[i + 1] - values[i]));
    }
  });

  // If no rectangle can be formed, the function returns 0, otherwise it returns the minimum area
  return result === Infinity ? 0 : result;
}
