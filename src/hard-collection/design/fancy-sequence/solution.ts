const MOD = BigInt(1e9 + 7);

export class Fancy {
  private values: bigint[];
  private mul: bigint;
  private add: bigint;

  constructor() {
    this.values = [];
    this.mul = BigInt(1);
    this.add = BigInt(0);
  }

  append(val: number): void {
    const value = BigInt(val);
    const invMul = modInverse(this.mul);
    const baseValue = normalize((value - this.add) * invMul);
    this.values.push(baseValue);
  }

  addAll(inc: number): void {
    this.add = normalize(this.add + BigInt(inc));
  }

  multAll(m: number): void {
    const multiplier = BigInt(m);
    this.mul = normalize(this.mul * multiplier);
    this.add = normalize(this.add * multiplier);
  }

  getIndex(idx: number): number {
    if (idx < 0 || idx >= this.values.length) {
      return -1;
    }

    const result = normalize(this.values[idx] * this.mul + this.add);
    return Number(result);
  }
}

function modPow(base: bigint, exp: bigint): bigint {
  let result = BigInt(1);
  let current = base % MOD;
  let power = exp;

  while (power > BigInt(0)) {
    if ((power & BigInt(1)) === BigInt(1)) {
      result = (result * current) % MOD;
    }

    current = (current * current) % MOD;
    power >>= BigInt(1);
  }

  return result;
}

function modInverse(value: bigint): bigint {
  return modPow(value, MOD - BigInt(2));
}

function normalize(value: bigint): bigint {
  let result = value % MOD;

  if (result < BigInt(0)) {
    result += MOD;
  }

  return result;
}
