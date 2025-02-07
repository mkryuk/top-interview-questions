export function tupleSameProduct(nums: number[]): number {
  const productCount = new Map<number, number>();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const product = nums[i] * nums[j];
      productCount.set(product, (productCount.get(product) || 0) + 1);
    }
  }

  let result = 0;
  // for each product with at least 2 pairs, calculate the number of valid tuples.
  // for count pairs, number of ways to choose 2 pairs is (count * (count - 1)) / 2.
  // multiply by 8 to get the number of valid tuples.
  for (const count of productCount.values()) {
    if (count > 1) {
      result += 8 * ((count * (count - 1)) / 2);
    }
  }
  return result;
}
