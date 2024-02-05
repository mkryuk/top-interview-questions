export function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return "";
  }

  const tFreq: { [key: string]: number } = {};
  const windowFreq: { [key: string]: number } = {};

  // Initialize frequency map for t
  for (const char of t) {
    tFreq[char] = (tFreq[char] || 0) + 1;
  }

  let have = 0; // Number of unique characters in the current window that match the required frequency in t
  let need = Object.keys(tFreq).length; // Number of unique characters needed from t
  let res = [-1, -1]; // Pair to keep track of the start and end of the minimum window
  let resLength = Infinity; // Length of the minimum window
  let left = 0; // Left pointer for the sliding window

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;

    if (tFreq[char] && windowFreq[char] === tFreq[char]) {
      have++;
    }

    // Try and contract the window till the point it ceases to be 'desirable'.
    while (have === need) {
      // Update our result if the current window is smaller
      if (right - left + 1 < resLength) {
        res = [left, right];
        resLength = right - left + 1;
      }

      // The character at the position pointed by the `left` pointer is no longer a part of the window.
      windowFreq[s[left]]--;
      if (tFreq[s[left]] && windowFreq[s[left]] < tFreq[s[left]]) {
        have--;
      }
      left++; // Contract the window
    }
  }

  return resLength === Infinity ? "" : s.substring(res[0], res[1] + 1);
}
