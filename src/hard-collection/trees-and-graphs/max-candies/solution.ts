export function maxCandies(
  status: number[],
  candies: number[],
  keys: number[][],
  containedBoxes: number[][],
  initialBoxes: number[],
): number {
  const n = status.length;

  const openedBoxes = new Array(n).fill(false);
  const haveBoxes = new Array(n).fill(false);
  const haveKeys = new Array(n).fill(false);

  const queue: number[] = [];
  let result = 0;
  // initialize with the boxes we're given initially
  for (const box of initialBoxes) {
    if (!haveBoxes[box]) {
      haveBoxes[box] = true;
      if (status[box] === 1) {
        queue.push(box);
      }
    }
  }
  while (queue.length > 0) {
    const box = queue.pop()!;
    if (openedBoxes[box]) {
      continue;
    }
    openedBoxes[box] = true;
    result += candies[box];
    // collect any new keys from this box
    for (const key of keys[box]) {
      haveKeys[key] = true;
      // if we already have that box and haven't opened it yet, we can now enqueue it
      if (haveBoxes[key] && !openedBoxes[key]) {
        queue.push(key);
      }
    }

    // collect any new boxes found inside
    for (const cb of containedBoxes[box]) {
      haveBoxes[cb] = true;
      // if that box is open or we already have its key, enqueue it
      if (status[cb] === 1 || haveKeys[cb]) {
        queue.push(cb);
      }
    }
  }
  return result;
}
