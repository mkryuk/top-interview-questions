export function getLastMoment(n: number, left: number[], right: number[]): number {
  // The key insight here is that when two ants meet and change directions,
  // it is the same as if they just passed through each other.
  // So, we just need to find the maximum time it would take for each ant to fall off the plank.
  let maxTime = 0;
  for (let i = 0; i < left.length; i++) {
    maxTime = Math.max(maxTime, left[i]);
  }
  for (let i = 0; i < right.length; i++) {
    maxTime = Math.max(maxTime, n - right[i]);
  }
  return maxTime;
}
