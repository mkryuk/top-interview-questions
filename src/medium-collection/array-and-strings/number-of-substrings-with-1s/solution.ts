export function numSub(s: string): number {
  const MOD: number = 1e9 + 7;

  let result: number = 0;
  let currentRun: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === "1") {
      currentRun++;
    } else {
      if (currentRun > 0) {
        result = (result + countOnesSubstrings(currentRun, MOD)) % MOD;
        currentRun = 0;
      }
    }
  }

  // add contribution from the last run if string ends with '1'
  if (currentRun > 0) {
    result = (result + countOnesSubstrings(currentRun, MOD)) % MOD;
  }

  return result;
}

function countOnesSubstrings(runLength: number, MOD: number): number {
  return ((runLength * (runLength + 1)) / 2) % MOD;
}
