export function countCommas(n: number): number {
  let commas = 0;

  for (let threshold = 1000; threshold <= n; threshold *= 1000) {
    commas += n - threshold + 1;
  }

  return commas;
}
