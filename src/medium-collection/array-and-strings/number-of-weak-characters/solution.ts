export function numberOfWeakCharacters(properties: number[][]): number {
  // Sort based on attack in descending order.
  // If attacks are same, sort based on defense in ascending order.
  properties.sort(
    ([attackA, defenseA], [attackB, defenseB]) =>
      attackB - attackA || defenseA - defenseB,
  );

  let maxDefense = 0;
  let result = 0;

  for (let [_, defense] of properties) {
    if (defense < maxDefense) {
      result++;
    }
    maxDefense = Math.max(maxDefense, defense);
  }

  return result;
}
