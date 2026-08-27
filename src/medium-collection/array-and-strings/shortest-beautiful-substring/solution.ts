export function shortestBeautifulSubstring(s: string, k: number): string {
  let left = 0;
  let ones = 0;
  let best = "";

  for (let right = 0; right < s.length; right++) {
    if (s[right] === "1") {
      ones++;
    }

    // remove extra ones
    while (ones > k) {
      if (s[left] === "1") {
        ones--;
      }
      left++;
    }

    if (ones === k) {
      // remove unnecessary leading zeros
      while (left < right && s[left] === "0") {
        left++;
      }

      const candidate = s.slice(left, right + 1);
      if (best === "" || candidate.length < best.length || (candidate.length === best.length && candidate < best)) {
        best = candidate;
      }
    }
  }

  return best;
}
