export function possibleStringCount(word: string, k: number): number {
  const MOD = 1e9 + 7;
  const n = word.length;
  if (k > n) {
    return 0;
  }

  // scan runs: prodAll, m1 (# of len-1 runs), R (len>=2 runs)
  let prodAll = 1;
  let m1 = 0;
  const R: number[] = [];

  let curChar = word[0];
  let curLen = 1;
  for (let i = 1; i < n; i++) {
    if (word[i] === curChar) {
      curLen++;
    } else {
      prodAll = (prodAll * curLen) % MOD;
      if (curLen === 1) m1++;
      else R.push(curLen);
      curChar = word[i];
      curLen = 1;
    }
  }
  // finalize last run
  prodAll = (prodAll * curLen) % MOD;
  if (curLen === 1) m1++;
  else R.push(curLen);

  const M = R.length;
  const kPrime = k - m1;

  // if minimal picks (1 per run) already reach k, all choices valid
  if (kPrime <= 0 || M >= kPrime) {
    return prodAll;
  }

  // count bad picks with sum < k via dp over t_i = s_i - 1
  const delta = kPrime - M;
  let dp = new Array<number>(delta).fill(0);
  dp[0] = 1;

  for (const runLen of R) {
    const maxT = runLen - 1;
    // prefix sums of dp
    const pref = new Array<number>(delta);
    pref[0] = dp[0];
    for (let j = 1; j < delta; j++) {
      pref[j] = (pref[j - 1] + dp[j]) % MOD;
    }

    // convolve with window size maxT+1
    const nextDp = new Array<number>(delta).fill(0);
    for (let j = 0; j < delta; j++) {
      const left = j - maxT;
      nextDp[j] = left > 0 ? (pref[j] - pref[left - 1] + MOD) % MOD : pref[j];
    }
    dp = nextDp;
  }

  // sum dp[0..delta-1] -> bad assignments
  let sumBad = 0;
  for (let j = 0; j < delta; j++) {
    sumBad = (sumBad + dp[j]) % MOD;
  }

  // result = total picks - bad picks
  return (prodAll - sumBad + MOD) % MOD;
}
