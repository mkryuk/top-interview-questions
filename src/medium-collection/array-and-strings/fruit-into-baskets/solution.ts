export function totalFruit(fruits: number[]): number {
  let currentTree = fruits[0];
  let prevTree = -1;
  let fruitsFromCurrentTree = 0;
  let totalCurrent = 0;
  let totalMax = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === currentTree) {
      totalCurrent++;
      fruitsFromCurrentTree++;
    } else if (fruits[i] === prevTree) {
      prevTree = currentTree;
      currentTree = fruits[i];
      totalCurrent++;
      fruitsFromCurrentTree = 1;
    } else {
      prevTree = currentTree;
      currentTree = fruits[i];
      totalCurrent = fruitsFromCurrentTree + 1;
      fruitsFromCurrentTree = 1;
    }
    totalMax = Math.max(totalCurrent, totalMax);
  }

  return totalMax;
}
