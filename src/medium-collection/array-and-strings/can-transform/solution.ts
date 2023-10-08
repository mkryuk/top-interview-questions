export function canTransform(start: string, end: string): boolean {
  if (start.length !== end.length) {
    return false;
  }

  let startIndex = 0;
  let endIndex = 0;
  const n = start.length;

  while (startIndex < n || endIndex < n) {
    // Skip Xs in start and end
    while (startIndex < n && start[startIndex] === "X") {
      startIndex++;
    }
    while (endIndex < n && end[endIndex] === "X") {
      endIndex++;
    }
    // Check if we have reached the end of one string but not the other
    if ((startIndex === n) !== (endIndex === n)) {
      return false;
    }
    // Check if characters are different
    if (start[startIndex] !== end[endIndex]) {
      return false;
    }
    // Check for invalid movements
    // L can be moved only to the left
    // R can be moved only to the right
    if (start[startIndex] === "L" && startIndex < endIndex) {
      return false;
    }
    if (start[startIndex] === "R" && startIndex > endIndex) {
      return false;
    }
    // Move pointers
    startIndex++;
    endIndex++;
  }

  return true;
}
