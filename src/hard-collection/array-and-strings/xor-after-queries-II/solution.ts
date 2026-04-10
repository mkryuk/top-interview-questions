export function xorAfterQueries(nums: number[], queries: number[][]): number {
  const modulo = 1e9 + 7;
  const chunkBase = 1 << 10;
  const chunkMask = chunkBase - 1;
  const basePowers = [1, chunkBase % modulo, (chunkBase * chunkBase) % modulo, 73_741_817, 511_620_083];
  const n = nums.length;
  const threshold = Math.floor(Math.sqrt(n));
  const result = nums.slice();
  const smallEvents: Array<Array<Array<[number, number]>>> = Array.from({ length: threshold + 1 }, (_, k) => {
    return Array.from({ length: k }, () => {
      return [];
    });
  });
  const inverseCache = new Map<number, number>();

  for (const query of queries) {
    const [left, right, step, value] = query;

    if (step > threshold) {
      for (let index = left; index <= right; index += step) {
        result[index] = mulMod(result[index], value, modulo, chunkMask, basePowers);
      }
    } else {
      const residue = left % step;
      const start = (left - residue) / step;
      const end = Math.floor((right - residue) / step);
      const events = smallEvents[step][residue];
      events.push([start, value]);
      events.push([end + 1, modInverse(value, modulo, inverseCache)]);
    }
  }

  for (let step = 1; step <= threshold; step++) {
    for (let residue = 0; residue < step; residue++) {
      const events = smallEvents[step][residue];

      if (events.length === 0) {
        continue;
      }

      events.sort((left, right) => {
        return left[0] - right[0];
      });

      let eventIndex = 0;
      let currentMultiplier = 1;
      let position = 0;

      for (let index = residue; index < n; index += step) {
        while (eventIndex < events.length && events[eventIndex][0] === position) {
          currentMultiplier = mulMod(currentMultiplier, events[eventIndex][1], modulo, chunkMask, basePowers);
          eventIndex++;
        }

        result[index] = mulMod(result[index], currentMultiplier, modulo, chunkMask, basePowers);
        position++;
      }
    }
  }

  let xorValue = 0;

  for (const value of result) {
    xorValue ^= value;
  }

  return xorValue;
}

function modInverse(value: number, modulo: number, inverseCache: Map<number, number>): number {
  const cachedValue = inverseCache.get(value);

  if (cachedValue !== undefined) {
    return cachedValue;
  }

  const inverse = modPow(value, modulo - 2, modulo);
  inverseCache.set(value, inverse);
  return inverse;
}

function modPow(base: number, exponent: number, modulo: number): number {
  const chunkBase = 1 << 10;
  const chunkMask = chunkBase - 1;
  const basePowers = [1, chunkBase % modulo, (chunkBase * chunkBase) % modulo, 73_741_817, 511_620_083];
  let currentBase = base % modulo;
  let currentExponent = exponent;
  let result = 1;

  while (currentExponent > 0) {
    if ((currentExponent & 1) === 1) {
      result = mulMod(result, currentBase, modulo, chunkMask, basePowers);
    }

    currentBase = mulMod(currentBase, currentBase, modulo, chunkMask, basePowers);
    currentExponent = Math.floor(currentExponent / 2);
  }

  return result;
}

function mulMod(left: number, right: number, modulo: number, chunkMask: number, basePowers: number[]): number {
  const left0 = left & chunkMask;
  const left1 = (left >>> 10) & chunkMask;
  const left2 = left >>> 20;
  const right0 = right & chunkMask;
  const right1 = (right >>> 10) & chunkMask;
  const right2 = right >>> 20;

  let result = 0;
  result += left0 * right0;
  result += (left0 * right1 + left1 * right0) * basePowers[1];
  result += (left0 * right2 + left1 * right1 + left2 * right0) * basePowers[2];
  result += (left1 * right2 + left2 * right1) * basePowers[3];
  result += left2 * right2 * basePowers[4];

  return result % modulo;
}
