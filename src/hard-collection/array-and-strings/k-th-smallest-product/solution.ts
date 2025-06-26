export function kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
  const n1 = nums1.length;
  const n2 = nums2.length;

  // helper: count how many pairs (i,j) have nums1[i] * nums2[j] <= x
  function countLE(x: number): number {
    let cnt = 0;
    for (const a of nums1) {
      if (a === 0) {
        if (x >= 0) {
          cnt += n2;
        }
      } else if (a > 0) {
        // need b <= floor(x / a)
        const bound = Math.floor(x / a);
        cnt += upperBound(nums2, bound);
      } else {
        // a < 0: need b >= ceil(x / a)
        const bound = Math.ceil(x / a);
        cnt += n2 - lowerBound(nums2, bound);
      }
    }
    return cnt;
  }

  // binary-search on the answer in [-1e10, 1e10]
  let left = -1e10,
    right = 1e10;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (countLE(mid) >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// standard lower_bound: first index i with arr[i] >= target
function lowerBound(arr: number[], target: number): number {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

// standard upper_bound: first index i with arr[i] > target
function upperBound(arr: number[], target: number): number {
  let lo = 0,
    hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (arr[mid] <= target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}
