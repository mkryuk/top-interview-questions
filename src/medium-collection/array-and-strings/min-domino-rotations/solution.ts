export function minDominoRotations(tops: number[], bottoms: number[]): number {
  const result = getRotations(tops, bottoms, tops[0]);
  if (result !== -1 || tops[0] === bottoms[0]) {
    return result;
  } else {
    return getRotations(tops, bottoms, bottoms[0]);
  }
}

function getRotations(tops: number[], bottoms: number[], num: number): number {
  let topRotations = 0;
  let bottomRotations = 0;
  for (let i = 0; i < tops.length; i++) {
    // if we can't make row i have num
    if (num !== tops[i] && num !== bottoms[i]) {
      return -1;
    }
    if (tops[i] !== num) {
      topRotations++;
    }
    if (bottoms[i] !== num) {
      bottomRotations++;
    }
  }
  return Math.min(topRotations, bottomRotations);
}
