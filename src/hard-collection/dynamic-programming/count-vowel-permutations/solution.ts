export function countVowelPermutation(n: number): number {
  // Define the modulo value
  const MOD: number = 1000000007;

  // We create a 2D DP table where each row will represent the state of the counts
  // after processing i characters. Each column will represent a vowel in the order 'a', 'e', 'i', 'o', 'u'.
  let dp: number[][] = new Array(n + 1).fill(null).map(() => new Array(5).fill(0));

  // Initialize the first row, as with 1 character, we can have 1 string ending with each vowel.
  for (let j = 0; j < 5; j++) {
    dp[1][j] = 1;
  }

  // Now, we iterate over the length of the string from 2 to n.
  for (let i = 2; i <= n; i++) {
    // For each length, we can calculate the number of strings formed as per the rules.

    // For 'a' (0), it can only be followed by an 'e' (1).
    dp[i][0] = dp[i - 1][1] % MOD;

    // For 'e' (1), it can only be followed by 'a' (0) or 'i' (2).
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;

    // For 'i' (2), it can be followed by 'a' (0), 'e' (1), 'o' (3), or 'u' (4) (every vowel except 'i').
    dp[i][2] = (((((dp[i - 1][0] + dp[i - 1][1]) % MOD) + dp[i - 1][3]) % MOD) + dp[i - 1][4]) % MOD;

    // For 'o' (3), it can only be followed by 'i' (2) or 'u' (4).
    dp[i][3] = (dp[i - 1][2] + dp[i - 1][4]) % MOD;

    // For 'u' (4), it can only be followed by 'a' (which is 0).
    dp[i][4] = dp[i - 1][0] % MOD;
  }

  // To get the result for the string of length n, we sum up the counts of all strings ending with any vowel.
  let result = 0;
  for (let j = 0; j < 5; j++) {
    result = (result + dp[n][j]) % MOD;
  }

  return result;
}
