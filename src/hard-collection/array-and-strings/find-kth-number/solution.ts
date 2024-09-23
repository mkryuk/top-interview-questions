export function findKthNumber(n: number, k: number): number {
  let curr = 1;
  k = k - 1; // we start from number 1

  while (k > 0) {
    let steps = calcSteps(n, curr, curr + 1);
    if (steps <= k) {
      // move to next sibling
      curr += 1;
      k -= steps;
    } else {
      // move to the first child
      curr *= 10;
      k -= 1; // count the current node
    }
  }

  return curr;
}

function calcSteps(n: number, curr: number, next: number): number {
  let steps = 0;
  while (curr <= n) {
    steps += Math.min(n + 1, next) - curr;
    curr *= 10;
    next *= 10;
  }
  return steps;
}
