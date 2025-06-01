export function distributeCandies(n: number, limit: number): number {
  let result = 0;
  for (let i = 0; i <= Math.min(n, limit); i++) {
    // we can enumerate the number of candies of one particular child
    // let it be i which means 0 <= i <= min(limit, n).
    // suppose the 2nd child gets j candies. Then 0 <= j <= limit and i + j <= n.
    // the 3rd child will hence get n - i - j candies and we should have 0 <= n - i - j <= limit.
    // for each i, we have max(0, n - i - limit) <= j <= min(limit, n - i)
    // each j corresponding to a solution
    result += Math.max(Math.min(limit, n - i) - Math.max(0, n - i - limit) + 1, 0);
  }
  return result;
}
