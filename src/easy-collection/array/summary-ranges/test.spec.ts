import { summaryRanges } from "./solution";

describe("Summary Ranges:", () => {
  it('summaryRanges should return ["0->2","4->5","7"] for nums = [0,1,2,4,5,7]', () => {
    const nums = [0, 1, 2, 4, 5, 7];
    const result = summaryRanges(nums);
    expect(result).toEqual(["0->2", "4->5", "7"]);
  });

  it('summaryRanges should return ["0","2->4","6","8->9"] for nums = [0,2,3,4,6,8,9]', () => {
    const nums = [0, 2, 3, 4, 6, 8, 9];
    const result = summaryRanges(nums);
    expect(result).toEqual(["0", "2->4", "6", "8->9"]);
  });
});
