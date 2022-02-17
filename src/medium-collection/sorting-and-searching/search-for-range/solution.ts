export function searchRange(nums: number[], target: number): number[] {
  const result: number[] = [-1, -1];
  let lli = 0;
  let lri = nums.length - 1;
  let rli = 0;
  let rri = lri;
  let li, ri;
  li = ri = getMid(lli, rri);
  while (lli <= lri || rli <= rri) {
    if (lli <= lri) {
      li = getMid(lli, lri);
      if (nums[li] > target) {
        lri = li - 1;
      } else if (nums[li] < target) {
        lli = li + 1;
      } else {
        lri = li - 1;
        result[0] = li;
      }
    }
    if (rli <= rri) {
      ri = getMid(rli, rri);
      if (nums[ri] > target) {
        rri = ri - 1;
      } else if (nums[ri] < target) {
        rli = ri + 1;
      } else {
        rli = ri + 1;
        result[1] = ri;
      }
    }
  }
  return result;
}

function getMid(left: number, right: number) {
  return Math.floor(left + (right - left) / 2);
}
