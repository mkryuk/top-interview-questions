export function peakIndexInMountainArray(arr: number[]): number {
  let left = 1;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}
