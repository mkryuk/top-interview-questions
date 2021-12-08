/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

export var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1,
      right = n;
    while (left <= right) {
      let index = Math.floor((right - left) / 2) + left;
      if (isBadVersion(index)) {
        right = index - 1;
      } else {
        left = index + 1;
      }
    }
    return left;
  };
};
