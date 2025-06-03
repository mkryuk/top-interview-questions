export function candy(ratings: number[]): number {
  const n = ratings.length;
  if (n === 0) return 0;

  // give each child 1 candy initially
  const candies = new Array<number>(n).fill(1);

  // left-to-right pass
  // if current rating is greater than the previous, give one more candy than previous
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // right-to-left pass
  // if current rating is greater than the next, ensure candies[i] > candies[i+1]
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // sum everything up
  return candies.reduce((prev, curr) => prev + curr, 0);
}
