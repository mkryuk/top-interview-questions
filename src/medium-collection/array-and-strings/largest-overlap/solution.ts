export function largestOverlap(img1: number[][], img2: number[][]): number {
  const ones1 = getOnes(img1);
  const ones2 = getOnes(img2);
  const shifts = new Map<string, number>();
  let maxOverlap = 0;

  for (const [row1, col1] of ones1) {
    for (const [row2, col2] of ones2) {
      const rowShift = row2 - row1;
      const colShift = col2 - col1;
      const key = `${rowShift},${colShift}`;
      const count = (shifts.get(key) ?? 0) + 1;
      shifts.set(key, count);
      maxOverlap = Math.max(maxOverlap, count);
    }
  }

  return maxOverlap;
}

function getOnes(image: number[][]): number[][] {
  const positions: number[][] = [];
  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image.length; col++) {
      if (image[row][col] === 1) {
        positions.push([row, col]);
      }
    }
  }
  return positions;
}
