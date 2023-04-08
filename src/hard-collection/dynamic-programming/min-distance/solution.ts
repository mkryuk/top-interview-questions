export function minDistance(houses: number[], k: number): number {
  // Sort the houses array to make sure the houses are in ascending order of their positions
  houses.sort((a, b) => a - b);
  const n = houses.length;
  // Initialize the memo table to store the minimum total distance for a given number of mailboxes and houses
  const memo = Array.from({ length: n }, () => Array(k + 1).fill(-1));
  // Initialize the cost table to store the total distance for a given range of houses and a single mailbox
  const cost = Array.from({ length: n }, () => Array(n).fill(0));

  // Calculate the total distance for a given range of houses and a single mailbox
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const mid = Math.floor((i + j) / 2);
      for (let m = i; m <= j; m++) {
        cost[i][j] += Math.abs(houses[m] - houses[mid]);
      }
    }
  }

  // Define the dp function to calculate the minimum total distance for a given set of houses and mailboxes
  function dp(i: number, k: number): number {
    // Base cases
    if (i === n) {
      return k === 0 ? 0 : Infinity;
    }
    if (k === 0) {
      return Infinity;
    }

    // Utilize memoization to avoid redundant calculations
    if (memo[i][k] !== -1) {
      return memo[i][k];
    }

    // Calculate the minimum total distance for the current house index 'i' and the remaining mailboxes 'k'
    let result = Infinity;
    for (let j = i; j < n; j++) {
      result = Math.min(result, cost[i][j] + dp(j + 1, k - 1));
    }

    // Store the result in the memo table and return it
    memo[i][k] = result;
    return result;
  }

  // Call the dp function with the initial house index (0) and the given number of mailboxes (k) to find the minimum total distance
  return dp(0, k);
}
