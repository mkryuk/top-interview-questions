import { Heap } from "../../design/heap/heap";

export function minOperations(nums: number[], x: number, k: number): number {
  const n = nums.length;
  const costs = calculateCosts(nums, x);

  const INF = Number.MAX_SAFE_INTEGER;

  // zero subarrays always cost zero
  let previous = new Array<number>(n + 1).fill(0);

  for (let groups = 1; groups <= k; groups++) {
    const current = new Array<number>(n + 1).fill(INF);

    for (let i = 1; i <= n; i++) {
      // option 1: don't end a subarray here
      current[i] = current[i - 1];

      // option 2: take nums[i - x ... i - 1]
      if (i >= x && previous[i - x] !== INF) {
        current[i] = Math.min(current[i], previous[i - x] + costs[i - x]);
      }
    }

    previous = current;
  }

  return previous[n];
}

class DualHeap {
  private left = new Heap<number>((a, b) => b - a); // max heap
  private right = new Heap<number>((a, b) => a - b); // min heap

  // elements that should be removed lazily
  private delayed = new Map<number, number>();

  // logical sizes without delayed elements
  private leftSize = 0;
  private rightSize = 0;

  // sums without delayed elements
  private leftSum = 0;
  private rightSum = 0;

  add(value: number): void {
    const median = this.left.top();

    if (median === null || value <= median) {
      this.left.push(value);
      this.leftSize++;
      this.leftSum += value;
    } else {
      this.right.push(value);
      this.rightSize++;
      this.rightSum += value;
    }

    this.balance();
  }

  remove(value: number): void {
    const median = this.left.top();

    this.delayed.set(value, (this.delayed.get(value) ?? 0) + 1);

    if (median !== null && value <= median) {
      this.leftSize--;
      this.leftSum -= value;

      if (value === median) {
        this.prune(this.left);
      }
    } else {
      this.rightSize--;
      this.rightSum -= value;

      if (value === this.right.top()) {
        this.prune(this.right);
      }
    }

    this.balance();
  }

  cost(): number {
    this.prune(this.left);
    this.prune(this.right);

    const median = this.left.top()!;

    // sum of distances from left elements to median
    const leftCost = median * this.leftSize - this.leftSum;

    // sum of distances from right elements to median
    const rightCost = this.rightSum - median * this.rightSize;

    return leftCost + rightCost;
  }

  private balance(): void {
    // left can contain one more element than right
    if (this.leftSize > this.rightSize + 1) {
      this.prune(this.left);

      const value = this.left.pop()!;

      this.leftSize--;
      this.leftSum -= value;

      this.right.push(value);
      this.rightSize++;
      this.rightSum += value;
    } else if (this.leftSize < this.rightSize) {
      this.prune(this.right);

      const value = this.right.pop()!;

      this.rightSize--;
      this.rightSum -= value;

      this.left.push(value);
      this.leftSize++;
      this.leftSum += value;
    }

    this.prune(this.left);
    this.prune(this.right);
  }

  private prune(heap: Heap<number>): void {
    while (!heap.isEmpty()) {
      const value = heap.top()!;
      const count = this.delayed.get(value) ?? 0;

      if (count === 0) {
        break;
      }

      heap.pop();

      if (count === 1) {
        this.delayed.delete(value);
      } else {
        this.delayed.set(value, count - 1);
      }
    }
  }
}

function calculateCosts(nums: number[], x: number): number[] {
  const costs = new Array<number>(nums.length - x + 1);
  const window = new DualHeap();

  // build first window
  for (let i = 0; i < x; i++) {
    window.add(nums[i]);
  }

  costs[0] = window.cost();

  // slide window
  for (let start = 1; start + x <= nums.length; start++) {
    window.remove(nums[start - 1]);
    window.add(nums[start + x - 1]);

    costs[start] = window.cost();
  }

  return costs;
}
