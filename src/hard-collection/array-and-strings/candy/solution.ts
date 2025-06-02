export function candy(ratings: number[]): number {
  const n = ratings.length;
  const minimums: number[] = [];

  // find local minimums
  for (let i = 0; i < n; i++) {
    let mid = ratings[i];
    let right = i === n - 1 ? Infinity : ratings[i + 1];
    if (mid < right) {
      minimums.push(i);
    }
  }

  const candies = new Array(n).fill(1);
  for (const minimum of minimums) {
    // pass from local minimum to the left
    for (let i = minimum - 1; i >= 0 && ratings[i] >= ratings[i + 1] && candies[i] <= candies[i + 1]; i--) {
      if (ratings[i] > ratings[i + 1]) {
        candies[i] = candies[i + 1] + 1;
      }
    }
    // pass from local minimum to the right
    for (let i = minimum + 1; i < n && ratings[i] >= ratings[i - 1] && candies[i] <= candies[i - 1]; i++) {
      if (ratings[i] > ratings[i - 1]) {
        candies[i] = candies[i - 1] + 1;
      }
    }
  }
  // sum all candies
  const result = candies.reduce((prev, curr) => prev + curr, 0);
  return result;
}
