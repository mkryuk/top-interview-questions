import { distance } from "./solution";

describe("2615. Sum of Distances:", () => {
  it("distance should return [5,0,3,4,0] for nums = [1,3,1,1,2]", () => {
    const nums = [1, 3, 1, 1, 2];
    const result = distance(nums);
    expect(result).toEqual([5, 0, 3, 4, 0]);
  });

  it("distance should return [0,0,0] for nums = [0,5,3]", () => {
    const nums = [0, 5, 3];
    const result = distance(nums);
    expect(result).toEqual([0, 0, 0]);
  });
});
