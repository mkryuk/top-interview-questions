export function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {
  const n = fruits.length;
  const pos: number[] = new Array(n);
  const amt: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    pos[i] = fruits[i][0];
    amt[i] = fruits[i][1];
  }

  // prefix sum of amounts
  const prefix: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + amt[i];
  }

  // helper to get sum in [l, r] inclusive
  const rangeSum = (l: number, r: number): number => {
    if (l > r) {
      return 0;
    }
    return prefix[r + 1] - prefix[l];
  };

  // binary search: first index with pos[idx] >= target
  const lowerBound = (target: number): number => {
    let lo = 0,
      hi = n;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (pos[mid] < target) {
        lo = mid + 1;
      } else hi = mid;
    }
    return lo;
  };

  let ans = 0;
  const mid = lowerBound(startPos); // first on right of or at startPos

  // case 1: go left first then right
  // iterate i as leftmost picked (could be >= startPos too, but cost formula handles)
  for (let i = 0; i < n; i++) {
    // if pos[i] > startPos, break; left-first means we must go left to reach i only if i <= startPos
    if (pos[i] > startPos) {
      break;
    }
    const distLeft = startPos - pos[i];
    if (distLeft > k) {
      continue;
    }

    // option A: go left to pos[i], then go right as far as allowed with remaining steps:
    // cost = distLeft * 2 + (pos[j] - startPos) <= k
    const remA = k - distLeft * 2;
    let rightReachA = startPos;
    if (remA >= 0) {
      rightReachA = startPos + remA;
    }
    // find rightmost index j with pos[j] <= rightReachA
    const jAidx = upperBound(pos, rightReachA) - 1;
    const totalA = rangeSum(i, Math.max(jAidx, mid - 1)); // ensure includes right if exists
    ans = Math.max(ans, totalA);

    // option B: go left to pos[i] and then directly stop (no right)
    const totalLeftOnly = rangeSum(i, mid - 1);
    ans = Math.max(ans, totalLeftOnly);

    // option C: go left to pos[i], then go right, but with only single pass (go left then to start then right without double back)
    // that is captured by using cost = distLeft + (pos[j] - startPos) + distLeft? Actually covered in symmetric loop.
  }

  // case 2: go right first then left
  for (let i = 0; i < n; i++) {
    if (pos[i] < startPos) {
      continue;
    }
    const distRight = pos[i] - startPos;
    if (distRight > k) {
      continue;
    }

    // option A: go right to pos[i], then left with remaining steps: cost = distRight * 2 + (startPos - pos[j]) <= k
    const remA = k - distRight * 2;
    let leftReachA = startPos;
    if (remA >= 0) leftReachA = startPos - remA;
    // find leftmost index j with pos[j] >= leftReachA
    const jAidx = lowerBound(leftReachA);
    const totalA = rangeSum(Math.min(jAidx, mid), i);
    ans = Math.max(ans, totalA);

    // option B: right only
    const totalRightOnly = rangeSum(mid, i);
    ans = Math.max(ans, totalRightOnly);
  }

  return ans;
}

// helper: upperBound to find first index with array[idx] > target
function upperBound(arr: number[], target: number): number {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}
