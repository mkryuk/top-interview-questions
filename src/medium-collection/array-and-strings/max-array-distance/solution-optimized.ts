export function maxDistance(arrays: number[][]): number {
  let minVal = arrays[0][0];
  let maxVal = arrays[0][arrays[0].length - 1];
  let maxDistance = 0;

  for (let i = 1; i < arrays.length; i++) {
    const currentArray = arrays[i];
    const dist1 = Math.abs(currentArray[currentArray.length - 1] - minVal);
    const dist2 = Math.abs(maxVal - currentArray[0]);
    maxDistance = Math.max(maxDistance, dist1, dist2);
    minVal = Math.min(minVal, currentArray[0]);
    maxVal = Math.max(maxVal, currentArray[currentArray.length - 1]);
  }

  return maxDistance;
}
