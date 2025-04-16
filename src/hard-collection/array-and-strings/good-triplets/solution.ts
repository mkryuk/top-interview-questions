export function goodTriplets(nums1: number[], nums2: number[]): number {
  const n = nums1.length;

  // build an index map for nums2: value -> its index in nums2.
  const pos2 = new Array(n);
  for (let i = 0; i < n; i++) {
    pos2[nums2[i]] = i;
  }

  // create the mapped array: for each element in nums1, store its index in nums2.
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = pos2[nums1[i]];
  }

  // leftCount[j] will count indices i<j with arr[i] < arr[j].
  const leftCount = new Array(n).fill(0);
  const fenwLeft = new FenwickTree(n);
  for (let j = 0; j < n; j++) {
    // query all indices with value strictly less than arr[j]
    leftCount[j] = fenwLeft.query(arr[j] - 1);
    fenwLeft.update(arr[j], 1);
  }

  // rightCount[j] will count indices k>j with arr[k] > arr[j].
  const rightCount = new Array(n).fill(0);
  const fenwRight = new FenwickTree(n);
  // process from right to left.
  for (let j = n - 1; j >= 0; j--) {
    // total count (so far) minus the count of values <= arr[j] gives values > arr[j].
    rightCount[j] = fenwRight.query(n - 1) - fenwRight.query(arr[j]);
    fenwRight.update(arr[j], 1);
  }

  // sum over all j: (number of valid left indices) * (number of valid right indices)
  let result = 0;
  for (let j = 0; j < n; j++) {
    result += leftCount[j] * rightCount[j];
  }
  return result;
}

// fenwicktree class: supports point updates and prefix sum queries.
class FenwickTree {
  tree: number[];
  n: number;

  constructor(n: number) {
    this.n = n;
    // using 1-indexed storage, tree length is n+1
    this.tree = new Array(n + 1).fill(0);
  }

  // updates the fenwick tree: adds `delta` at index `i`
  update(i: number, delta: number): void {
    // convert to 1-indexed
    i++;
    while (i <= this.n) {
      this.tree[i] += delta;
      i += i & -i;
    }
  }

  // returns the prefix sum for indices [0, i] (inclusive).
  query(i: number): number {
    if (i < 0) {
      // no values before index 0
      return 0;
    }
    let sum = 0;
    // convert to 1-indexed
    i++;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & -i;
    }
    return sum;
  }
}
