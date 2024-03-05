export function minimumLength(s: string): number {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const charToRemove = s[left];
    while (left <= right && s[left] === charToRemove) {
      left++;
    }
    while (right >= left && s[right] === charToRemove) {
      right--;
    }
  }

  return right - left + 1;
}
