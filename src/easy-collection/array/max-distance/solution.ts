export function maxDistance(colors: number[]): number {
  let n = colors.length - 1;
  let start = 0;
  let end = n;
  // Find 'end' with a different color than the first house.
  while (colors[start] === colors[end]) {
    end--;
  }
  // Find 'start' with a different color than the last house.
  while (colors[start] === colors[n]) {
    start++;
  }
  // Return the maximum distance between different-colored houses.
  return Math.max(end, n - start);
}
