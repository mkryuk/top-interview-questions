export function maximumScore(nums: number[], k: number): number {
  const mod = BigInt(1000000007); // use bigint for mod
  const n = nums.length;

  // precompute the maximum value to build sieve for numbers up to max(nums)
  const maxVal = Math.max(...nums);
  const primeCount = new Array(maxVal + 1).fill(0);

  // sieve to count distinct prime factors for each number.
  for (let i = 2; i <= maxVal; i++) {
    if (primeCount[i] === 0) {
      // i is prime
      for (let j = i; j <= maxVal; j += i) {
        primeCount[j]++;
      }
    }
  }

  // compute prime scores for each element in nums.
  const pscore: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    pscore[i] = primeCount[nums[i]];
  }

  // for each index i, compute left[i]:
  // left[i] is the number of indices l (ending at i) for which all numbers in [l, i-1] have prime score < pscore[i].
  const left: number[] = new Array(n).fill(0);
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && pscore[stack[stack.length - 1]] < pscore[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  // for each index i, compute right[i]:
  // right[i] is the number of indices r (starting at i) for which all numbers in [i+1, r] have prime score <= pscore[i].
  const right: number[] = new Array(n).fill(0);
  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && pscore[stack[stack.length - 1]] <= pscore[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  // for each index, the frequency (number of subarrays where nums[i] is chosen)
  type Candidate = { val: number; freq: number };
  const candidates: Candidate[] = [];
  for (let i = 0; i < n; i++) {
    candidates.push({ val: nums[i], freq: left[i] * right[i] });
  }

  // sort candidates by multiplier value (nums[i]) in descending order.
  candidates.sort((a, b) => b.val - a.val);

  // bigint modular exponentiation.
  function modExp(base: bigint, exp: bigint, mod: bigint): bigint {
    let res = BigInt(1);
    base %= mod;
    while (exp > BigInt(0)) {
      if ((exp & BigInt(1)) === BigInt(1)) {
        res = (res * base) % mod;
      }
      base = (base * base) % mod;
      exp = exp / BigInt(2);
    }
    return res;
  }

  // greedily choose multiplications from the candidate multipliers.
  let result = BigInt(1);
  let remaining = BigInt(k);
  for (const cand of candidates) {
    if (remaining <= BigInt(0)) {
      break;
    }
    const use = BigInt(Math.min(cand.freq, Number(remaining)));
    result = (result * modExp(BigInt(cand.val), use, mod)) % mod;
    remaining -= use;
  }

  return Number(result);
}
