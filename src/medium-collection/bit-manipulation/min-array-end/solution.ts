export function minEnd(n: number, x: number): number {
  let result: bigint = BigInt(x);
  let remaining: bigint = BigInt(n - 1);
  let position: bigint = BigInt(1);

  while (remaining > BigInt(0)) {
    if ((BigInt(x) & position) === BigInt(0)) {
      result |= (remaining & BigInt(1)) * position;
      remaining >>= BigInt(1);
    }
    position <<= BigInt(1);
  }

  return Number(result);
}
