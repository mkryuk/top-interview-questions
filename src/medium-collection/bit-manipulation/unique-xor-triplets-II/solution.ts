export function uniqueXorTriplets(nums: number[]): number {
  // duplicate values do not create new xor results
  const values: number[] = Array.from(new Set(nums));

  // nums[i] < 2048, so every xor result is also below 2048
  const xorLimit: number = 2048;
  const pairXors: boolean[] = new Array<boolean>(xorLimit).fill(false);
  const tripletXors: boolean[] = new Array<boolean>(xorLimit).fill(false);

  // calculate every possible a xor b
  for (const first of values) {
    for (const second of values) {
      pairXors[first ^ second] = true;
    }
  }

  // calculate every possible (a xor b) xor c
  for (let pairXor: number = 0; pairXor < xorLimit; pairXor++) {
    if (!pairXors[pairXor]) {
      continue;
    }

    for (const value of values) {
      tripletXors[pairXor ^ value] = true;
    }
  }

  let result: number = 0;

  for (const exists of tripletXors) {
    if (exists) {
      result++;
    }
  }

  return result;
}
