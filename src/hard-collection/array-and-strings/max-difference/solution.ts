export function maxDifference(s: string, k: number): number {
  const n = s.length;
  let result = -Infinity; // best answer so far

  // enumerate every ordered pair of distinct digits ‘0’..‘4’
  for (const a of ["0", "1", "2", "3", "4"]) {
    for (const b of ["0", "1", "2", "3", "4"]) {
      // skip identical characters
      if (a === b) {
        continue;
      }

      const best: number[] = [Infinity, Infinity, Infinity, Infinity];
      // best[idx] = smallest d(left) seen so far with status idx
      //   where d(i) = pref_a(i) - pref_b(i)

      // running prefix counters up to the current right border
      let cnt_a = 0;
      let cnt_b = 0;
      // prefix counters up to the element just before the left border
      let prev_a = 0;
      let prev_b = 0;
      let left = -1; // window is (left, right]

      for (let right = 0; right < n; right++) {
        // extend window to the right by s[right]
        cnt_a += s[right] === a ? 1 : 0;
        cnt_b += s[right] === b ? 1 : 0;

        // shrink the left border while the window is long enough
        // and already contains at least two b’s (even positive)
        while (right - left >= k && cnt_b - prev_b >= 2) {
          const left_status = getStatus(prev_a, prev_b);
          // record the minimal d(left) for this parity pattern
          best[left_status] = Math.min(best[left_status], prev_a - prev_b);
          // move left forward by one position
          left++;
          prev_a += s[left] === a ? 1 : 0;
          prev_b += s[left] === b ? 1 : 0;
        }

        // now try to close a valid substring ending at right
        const right_status = getStatus(cnt_a, cnt_b);
        const need = right_status ^ 0b10; // flip parity of a only
        if (best[need] !== Infinity) {
          result = Math.max(result, cnt_a - cnt_b - best[need]);
        }
      }
    }
  }
  return result === -Infinity ? -1 : result; // return -1 if no valid substring
}

// convert a pair of prefix parities (odd/even) into a 2-bit status id 0..3
function getStatus(cnt_a: number, cnt_b: number): number {
  return ((cnt_a & 1) << 1) | (cnt_b & 1);
}
