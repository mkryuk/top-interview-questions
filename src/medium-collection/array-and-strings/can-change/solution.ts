export function canChange(start: string, target: string): boolean {
  let n = start.length;
  let i = 0;
  let j = 0;

  while (i < n || j < n) {
    while (i < n && start[i] === "_") {
      i++;
    }
    while (j < n && target[j] === "_") {
      j++;
    }
    if (i === n && j === n) {
      return true;
    }
    if ((i === n) !== (j === n)) {
      return false;
    }
    if (start[i] !== target[j]) {
      return false;
    }
    if (start[i] === "L" && i < j) {
      return false;
    }
    if (start[i] === "R" && i > j) {
      return false;
    }
    i++;
    j++;
  }

  return true;
}
