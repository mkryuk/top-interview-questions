export function maxDistance(s: string, k: number): number {
  let latitude = 0;
  let longitude = 0;
  let result = 0;
  const n = s.length;
  // the optimal strategy is to modify the less frequent letters in both directions whenever possible.
  // if the total number of such letters is greater than k,
  // then modifying any k of them increases the Manhattan distance by 2×k.
  // if the total number is less than or equal to k,
  // then all the less frequent letters in both directions will be modified,
  // and no further modifications are necessary.
  // In this case, the Manhattan distance becomes equal to the length of the string.
  for (let i = 0; i < n; i++) {
    switch (s[i]) {
      case "N":
        latitude++;
        break;
      case "S":
        latitude--;
        break;
      case "E":
        longitude++;
        break;
      case "W":
        longitude--;
        break;
    }
    result = Math.max(result, Math.min(Math.abs(latitude) + Math.abs(longitude) + k * 2, i + 1));
  }
  return result;
}
