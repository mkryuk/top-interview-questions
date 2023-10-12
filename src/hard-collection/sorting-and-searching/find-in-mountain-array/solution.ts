import { MountainArray } from "./mountain-array";

export function findInMountainArray(
  target: number,
  mountainArr: MountainArray,
): number {
  let n = mountainArr.length();
  let left = 0;
  let right = n;

  // find the peak
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let peak = left;

  // search for the target in the increasing part
  left = 0;
  right = peak;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    let midVal = mountainArr.get(mid);
    if (midVal < target) {
      left = mid + 1;
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  // search for the target in the decreasing part
  left = peak;
  right = n - 1;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    let midVal = mountainArr.get(mid);
    if (midVal > target) {
      left = mid + 1;
    } else if (midVal < target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  // the target is not in the mountain array
  return -1;
}
