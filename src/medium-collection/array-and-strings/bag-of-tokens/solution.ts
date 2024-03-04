export function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((a, b) => a - b);
  if (tokens[0] > power) {
    return 0;
  }
  let left = 0;
  let right = tokens.length - 1;
  let result = 0;
  while (left <= right) {
    if (tokens[left] <= power) {
      power -= tokens[left];
      result++;
      left++;
    } else if (right - left > 1) {
      power += tokens[right];
      right--;
      result--;
    } else {
      break;
    }
  }
  return result;
}
