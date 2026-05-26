export function canReach(s: string, minJump: number, maxJump: number): boolean {
  const n = s.length;

  if (s[n - 1] !== "0") {
    return false;
  }

  const reachable: boolean[] = new Array(n).fill(false);
  reachable[0] = true;
  let reachableCount = 0;

  for (let i = 1; i < n; i++) {
    const addIndex = i - minJump;
    const removeIndex = i - maxJump - 1;

    // add newly valid left boundary index
    if (addIndex >= 0 && reachable[addIndex]) {
      reachableCount++;
    }

    // remove index that is now too far away
    if (removeIndex >= 0 && reachable[removeIndex]) {
      reachableCount--;
    }

    // current index is reachable if there is at least one reachable index
    // in range [i - maxJump, i - minJump]
    if (s[i] === "0" && reachableCount > 0) {
      reachable[i] = true;
    }
  }

  return reachable[n - 1];
}
