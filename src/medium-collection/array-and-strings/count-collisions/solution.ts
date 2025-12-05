export function countCollisions(directions: string): number {
  // find first index that is not 'L'
  const start: number = findFirstNonL(directions);

  // find last index that is not 'R'
  const end: number = findLastNonR(directions);

  // if everything is trimmed away, no collisions
  if (start > end) {
    return 0;
  }

  let collisions: number = 0;

  // count all moving cars ('L' or 'R') in the middle segment
  for (let i: number = start; i <= end; i++) {
    const ch: string = directions[i];

    if (ch !== "S") {
      collisions++;
    }
  }

  return collisions;
}

// find index of first character that is not 'L'
function findFirstNonL(directions: string): number {
  let i: number = 0;

  while (i < directions.length && directions[i] === "L") {
    i++;
  }

  return i;
}

// find index of last character that is not 'R'
function findLastNonR(directions: string): number {
  let i: number = directions.length - 1;

  while (i >= 0 && directions[i] === "R") {
    i--;
  }

  return i;
}
