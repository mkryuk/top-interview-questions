export function minimumDeletions(s: string): number {
  let aTotal = 0;
  for (const char of s) {
    if (char === "a") {
      aTotal++;
    }
  }
  let aCount = 0;
  let bCount = 0;
  let minDeletions = Number.MAX_SAFE_INTEGER;
  for (const char of s) {
    if (char === "a") {
      aCount++;
    } else {
      bCount++;
    }
    // the deletions needed to balance the string at this point
    // remove all 'b' before this point + all 'a' after this point
    const deletions = bCount + (aTotal - aCount);
    minDeletions = Math.min(minDeletions, deletions);
  }
  // the minimum deletions will be bigger if string consists of only 'a's or only 'b's
  return Math.min(minDeletions, aCount, bCount);
}
