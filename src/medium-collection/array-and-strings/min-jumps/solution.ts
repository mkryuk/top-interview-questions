export function minJumps(nums: number[]): number {
  const n = nums.length;

  if (n === 1) {
    return 0;
  }

  const maxValue = Math.max(...nums);
  const spf = buildSmallestPrimeFactor(maxValue);
  const neededPrime = collectPrimeTeleportValues(nums, spf, maxValue);
  const divisibleByPrime = buildDivisibilityGroups(nums, spf, neededPrime, maxValue);

  return bfs(nums, spf, divisibleByPrime);
}

function buildSmallestPrimeFactor(limit: number): Int32Array {
  const spf = new Int32Array(limit + 1);
  for (let value = 2; value <= limit; value++) {
    if (spf[value] === 0) {
      spf[value] = value;
      if (value * value <= limit) {
        for (let multiple = value * value; multiple <= limit; multiple += value) {
          if (spf[multiple] === 0) {
            spf[multiple] = value;
          }
        }
      }
    }
  }
  return spf;
}

function collectPrimeTeleportValues(nums: number[], spf: Int32Array, maxValue: number): Uint8Array {
  const neededPrime = new Uint8Array(maxValue + 1);
  for (const value of nums) {
    if (isPrime(value, spf)) {
      neededPrime[value] = 1;
    }
  }
  return neededPrime;
}

function buildDivisibilityGroups(
  nums: number[],
  spf: Int32Array,
  neededPrime: Uint8Array,
  maxValue: number,
): Array<number[] | undefined> {
  const groups: Array<number[] | undefined> = new Array(maxValue + 1);

  for (let index = 0; index < nums.length; index++) {
    const factors = getDistinctPrimeFactors(nums[index], spf);
    for (const prime of factors) {
      if (neededPrime[prime] === 1) {
        if (groups[prime] === undefined) {
          groups[prime] = [];
        }
        groups[prime]!.push(index);
      }
    }
  }

  return groups;
}

function getDistinctPrimeFactors(value: number, spf: Int32Array): number[] {
  const factors: number[] = [];
  while (value > 1) {
    const prime = spf[value];
    factors.push(prime);
    while (value % prime === 0) {
      value = Math.floor(value / prime);
    }
  }

  return factors;
}

function isPrime(value: number, spf: Int32Array): boolean {
  return value >= 2 && spf[value] === value;
}

function bfs(nums: number[], spf: Int32Array, divisibleByPrime: Array<number[] | undefined>): number {
  const n = nums.length;
  const distance = new Int32Array(n);
  distance.fill(-1);
  distance[0] = 0;
  const queue: number[] = [0];
  let head = 0;

  while (head < queue.length) {
    const index = queue[head];
    head++;

    if (index === n - 1) {
      return distance[index];
    }

    tryVisit(index + 1, index, distance, queue, n);
    tryVisit(index - 1, index, distance, queue, n);

    const value = nums[index];

    if (isPrime(value, spf)) {
      const targets = divisibleByPrime[value];

      if (targets !== undefined) {
        for (const target of targets) {
          if (target !== index && distance[target] === -1) {
            distance[target] = distance[index] + 1;

            queue.push(target);
          }
        }

        // process each prime teleport group only once
        divisibleByPrime[value] = undefined;
      }
    }
  }

  return distance[n - 1];
}

function tryVisit(nextIndex: number, currentIndex: number, distance: Int32Array, queue: number[], n: number): void {
  if (nextIndex < 0 || nextIndex >= n) {
    return;
  }

  if (distance[nextIndex] !== -1) {
    return;
  }

  distance[nextIndex] = distance[currentIndex] + 1;
  queue.push(nextIndex);
}
