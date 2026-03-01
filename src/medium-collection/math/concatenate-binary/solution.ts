export function concatenatedBinary(n: number): number {
  const mod: number = 1e9 + 7;

  let result: number = 0;
  let bitLen: number = 0;

  for (let i: number = 1; i <= n; i += 1) {
    // when i is a power of two, its binary length increases by 1
    if ((i & (i - 1)) === 0) {
      bitLen += 1;
    }

    // shift current result left by bitLen and append i
    // use modulo at each step to keep number in range
    result = (result * modPow2(bitLen, mod)) % mod;
    result = (result + i) % mod;
  }

  return result;
}

function modPow2(exp: number, mod: number): number {
  // returns (2^exp) % mod using fast exponentiation
  let base: number = 2;
  let e: number = exp;
  let res: number = 1;

  while (e > 0) {
    if ((e & 1) === 1) {
      res = (res * base) % mod;
    }

    base = (base * base) % mod;
    e >>= 1;
  }

  return res;
}
