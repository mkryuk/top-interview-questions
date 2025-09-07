export function minOperations(queries: number[][]): number {
  let totalOps: bigint = BigInt(0);

  for (const [l, r] of queries) {
    const L: bigint = BigInt(l);
    const R: bigint = BigInt(r);

    const steps: bigint = getDivideSteps(R) - getDivideSteps(L - BigInt(1));

    // ceil tokens
    const ops: bigint = (steps + BigInt(1)) / BigInt(2);
    totalOps += ops;
  }

  return Number(totalOps);
}

// the total number of divide-by-4 steps needed for all integers from 1 up to limit.
export function getDivideSteps(limit: bigint): bigint {
  if (limit <= BigInt(0)) {
    return BigInt(0);
  }

  let sum: bigint = BigInt(0);
  let base: bigint = BigInt(1);
  let blockIdx: bigint = BigInt(1);

  while (base <= limit) {
    const naturalEnd: bigint = base * BigInt(2) - BigInt(1);
    const end: bigint = naturalEnd <= limit ? naturalEnd : limit;

    const count: bigint = end - base + BigInt(1);
    // floor((i+1)/2)
    const weight: bigint = (blockIdx + BigInt(1)) / BigInt(2);

    sum += weight * count;

    blockIdx += BigInt(1);
    base *= BigInt(2);
  }

  return sum;
}
