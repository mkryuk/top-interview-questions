export function maxPalindromes(s: string, k: number): number {
  const n = s.length;
  const dp: number[] = new Array(n + 1).fill(0);

  for (let end = 1; end <= n; end++) {
    // skip the current character
    dp[end] = dp[end - 1];

    // try palindrome of length k
    const startK = end - k;

    if (startK >= 0 && isPalindrome(s, startK, end - 1)) {
      dp[end] = Math.max(dp[end], dp[startK] + 1);
    }

    // try palindrome of length k + 1
    const startK1 = end - k - 1;
    if (startK1 >= 0 && isPalindrome(s, startK1, end - 1)) {
      dp[end] = Math.max(dp[end], dp[startK1] + 1);
    }
  }

  return dp[n];
}

function isPalindrome(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
