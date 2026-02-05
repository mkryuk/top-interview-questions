export function maxSumTrionic(nums: number[]): number {
  const n: number = nums.length;

  function toBig(x: number): bigint {
    return BigInt(x);
  }

  function maxBig(a: bigint, b: bigint): bigint {
    if (a > b) {
      return a;
    }
    return b;
  }

  // inc1Any: best strictly increasing subarray sum ending at i (length >= 1)
  let inc1Any: bigint = toBig(nums[0]);

  // inc1Ge2: best strictly increasing subarray sum ending at i (length >= 2), or null if impossible
  let inc1Ge2: bigint | null = null;

  // dec2: best (inc then dec) sum ending at i while currently decreasing, or null if impossible
  let dec2: bigint | null = null;

  // inc3: best (inc, dec, inc) sum ending at i while currently increasing, or null if impossible
  let inc3: bigint | null = null;

  let result: bigint | null = null;

  for (let i: number = 1; i < n; i++) {
    const a: number = nums[i - 1];
    const b: number = nums[i];
    const bb: bigint = toBig(b);

    const prevInc1Any: bigint = inc1Any;
    const prevInc1Ge2: bigint | null = inc1Ge2;
    const prevDec2: bigint | null = dec2;
    const prevInc3: bigint | null = inc3;

    // update increasing phase (phase 1)
    if (a < b) {
      // best inc (len >= 1)
      const extendAny: bigint = prevInc1Any + bb;
      const startAny: bigint = bb;

      inc1Any = maxBig(extendAny, startAny);

      // best inc (len >= 2)
      // - either extend a previous len>=2
      // - or extend a previous len>=1 (creates len==2 at minimum)
      let bestGe2: bigint = prevInc1Any + bb;

      if (prevInc1Ge2 !== null) {
        const cand: bigint = prevInc1Ge2 + bb;

        if (cand > bestGe2) {
          bestGe2 = cand;
        }
      }

      inc1Ge2 = bestGe2;
    } else {
      inc1Any = bb;
      inc1Ge2 = null;
    }

    // update decreasing phase (phase 2)
    if (a > b) {
      let bestDec2: bigint | null = null;

      // extend existing dec2
      if (prevDec2 !== null) {
        bestDec2 = prevDec2 + bb;
      }

      // start dec2 from an inc1 with len>=2 (ending at i-1)
      if (prevInc1Ge2 !== null) {
        const cand: bigint = prevInc1Ge2 + bb;

        if (bestDec2 === null || cand > bestDec2) {
          bestDec2 = cand;
        }
      }

      dec2 = bestDec2;
    } else {
      dec2 = null;
    }

    // update final increasing phase (phase 3)
    if (a < b) {
      let bestInc3: bigint | null = null;

      // extend existing inc3
      if (prevInc3 !== null) {
        bestInc3 = prevInc3 + bb;
      }

      // start inc3 from dec2 (ending at i-1)
      if (prevDec2 !== null) {
        const cand: bigint = prevDec2 + bb;

        if (bestInc3 === null || cand > bestInc3) {
          bestInc3 = cand;
        }
      }

      inc3 = bestInc3;
    } else {
      inc3 = null;
    }

    // update answer
    if (inc3 !== null) {
      if (result === null) {
        result = inc3;
      } else {
        result = maxBig(result, inc3);
      }
    }
  }

  return Number(result!);
}
