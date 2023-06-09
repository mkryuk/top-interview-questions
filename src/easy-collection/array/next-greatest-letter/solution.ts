export function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length - 1;
  let mid = 0;
  let result = 0;
  while (left <= right) {
    mid = left + Math.trunc((right - left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }
  return letters[result];
}
