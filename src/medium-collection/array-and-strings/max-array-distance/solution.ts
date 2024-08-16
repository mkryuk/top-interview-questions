export function maxDistance(arrays: number[][]): number {
  let minArray: [number, number][] = [];
  let maxArray: [number, number][] = [];

  for (let index = 0; index < arrays.length; index++) {
    let min = arrays[index][0];
    let max = arrays[index][arrays[index].length - 1];
    minArray.push([min, index]);
    maxArray.push([max, index]);
  }

  minArray.sort(([a], [b]) => a - b);
  maxArray.sort(([a], [b]) => b - a);

  let result = 0;

  // check if the min and max values come from the same array
  if (minArray[0][1] === maxArray[0][1]) {
    // if they do, compare the second-largest difference
    result = Math.max(
      maxArray[1][0] - minArray[0][0], // max of second array - min of first array
      maxArray[0][0] - minArray[1][0], // max of first array - min of second array
    );
  } else {
    // if they don't, calculate the difference between the largest max and smallest min
    result = maxArray[0][0] - minArray[0][0];
  }

  return result;
}
