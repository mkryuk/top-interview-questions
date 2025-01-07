export function minOperations(boxes: string): number[] {
  const n = boxes.length;
  const result = new Array(n).fill(0);
  let operations = 0;
  let count = 0;
  // count the balls to move from the left
  for (let i = 0; i < n; i++) {
    operations += count;
    if (boxes[i] === "1") {
      count++;
    }
    result[i] += operations;
  }
  operations = 0;
  count = 0;
  // count the balls to move from the right
  for (let i = n - 1; i >= 0; i--) {
    operations += count;
    if (boxes[i] === "1") {
      count++;
    }
    result[i] += operations;
  }
  return result;
}
