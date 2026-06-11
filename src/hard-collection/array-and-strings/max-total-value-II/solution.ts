export function maxTotalValue(nums: number[], k: number): number {
  const n = nums.length;
  const totalSubarrays = (n * (n + 1)) / 2;
  let minValue = nums[0];
  let maxValue = nums[0];

  for (const value of nums) {
    if (value < minValue) {
      minValue = value;
    }
    if (value > maxValue) {
      maxValue = value;
    }
  }

  let left = 0;
  let right = maxValue - minValue;

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    const lessCount = countSubarraysWithRangeLessThan(nums, mid);
    const greaterOrEqualCount = totalSubarrays - lessCount;

    if (greaterOrEqualCount >= k) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  const threshold = left;
  const maxTable = new SparseTable(nums, true);
  const minTable = new SparseTable(nums, false);
  const validRight = getMaxRightWithRangeAtMost(nums, threshold);

  let greaterCount = 0;
  let greaterSum = 0;

  for (let start = 0; start < n; start++) {
    for (let end = validRight[start] + 1; end < n; end++) {
      const maxInRange = maxTable.query(start, end);
      const minInRange = minTable.query(start, end);
      greaterSum += maxInRange - minInRange;
      greaterCount++;
    }
  }

  return greaterSum + (k - greaterCount) * threshold;
}

function countSubarraysWithRangeLessThan(nums: number[], limit: number): number {
  const maxDeque = new IndexDeque(nums.length);
  const minDeque = new IndexDeque(nums.length);
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    while (!maxDeque.isEmpty() && nums[maxDeque.back()] <= nums[right]) {
      maxDeque.popBack();
    }
    maxDeque.pushBack(right);
    while (!minDeque.isEmpty() && nums[minDeque.back()] >= nums[right]) {
      minDeque.popBack();
    }

    minDeque.pushBack(right);
    while (!maxDeque.isEmpty() && !minDeque.isEmpty() && nums[maxDeque.front()] - nums[minDeque.front()] >= limit) {
      if (maxDeque.front() === left) {
        maxDeque.popFront();
      }
      if (minDeque.front() === left) {
        minDeque.popFront();
      }

      left++;
    }
    count += right - left + 1;
  }

  return count;
}

function getMaxRightWithRangeAtMost(nums: number[], limit: number): number[] {
  const n = nums.length;
  const result = new Array<number>(n);
  const maxDeque = new IndexDeque(n);
  const minDeque = new IndexDeque(n);

  let right = 0;

  for (let left = 0; left < n; left++) {
    while (right < n) {
      while (!maxDeque.isEmpty() && nums[maxDeque.back()] <= nums[right]) {
        maxDeque.popBack();
      }
      maxDeque.pushBack(right);
      while (!minDeque.isEmpty() && nums[minDeque.back()] >= nums[right]) {
        minDeque.popBack();
      }

      minDeque.pushBack(right);
      if (nums[maxDeque.front()] - nums[minDeque.front()] <= limit) {
        right++;
      } else {
        if (maxDeque.back() === right) {
          maxDeque.popBack();
        }
        if (minDeque.back() === right) {
          minDeque.popBack();
        }
        break;
      }
    }

    result[left] = right - 1;
    if (!maxDeque.isEmpty() && maxDeque.front() === left) {
      maxDeque.popFront();
    }
    if (!minDeque.isEmpty() && minDeque.front() === left) {
      minDeque.popFront();
    }
    if (right < left + 1) {
      right = left + 1;
    }
  }
  return result;
}

class SparseTable {
  private readonly log: number[];
  private readonly table: number[][];
  private readonly isMaxTable: boolean;
  public constructor(nums: number[], isMaxTable: boolean) {
    const n = nums.length;
    this.isMaxTable = isMaxTable;
    this.log = new Array<number>(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
      this.log[i] = this.log[Math.floor(i / 2)] + 1;
    }

    const levels = this.log[n] + 1;
    this.table = Array.from({ length: levels }, () => new Array<number>(n));

    for (let i = 0; i < n; i++) {
      this.table[0][i] = nums[i];
    }

    for (let level = 1; level < levels; level++) {
      const length = 1 << level;
      const half = length >> 1;

      for (let i = 0; i + length <= n; i++) {
        this.table[level][i] = this.combine(this.table[level - 1][i], this.table[level - 1][i + half]);
      }
    }
  }

  public query(left: number, right: number): number {
    const length = right - left + 1;
    const level = this.log[length];
    const blockLength = 1 << level;

    return this.combine(this.table[level][left], this.table[level][right - blockLength + 1]);
  }

  private combine(a: number, b: number): number {
    if (this.isMaxTable) {
      return Math.max(a, b);
    }

    return Math.min(a, b);
  }
}

class IndexDeque {
  private readonly data: number[];
  private head = 0;
  private tail = 0;
  public constructor(capacity: number) {
    this.data = new Array<number>(capacity + 5);
  }

  public isEmpty(): boolean {
    return this.head === this.tail;
  }

  public front(): number {
    return this.data[this.head];
  }

  public back(): number {
    return this.data[this.tail - 1];
  }

  public pushBack(value: number): void {
    this.data[this.tail] = value;
    this.tail++;
  }

  public popBack(): number {
    this.tail--;
    return this.data[this.tail];
  }

  public popFront(): number {
    const value = this.data[this.head];
    this.head++;
    return value;
  }
}
