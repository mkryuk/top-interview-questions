import { maximumTripletValue } from "./solution-optimized";

describe("Maximum Value of an Ordered Triplet I", () => {
  it("maximumTripletValue should return 77 for nums = [12,6,1,2,7]", () => {
    const nums = [12, 6, 1, 2, 7];
    const result = maximumTripletValue(nums);
    expect(result).toEqual(77);
  });

  it("maximumTripletValue should return 133 for nums = [1,10,3,4,19]", () => {
    const nums = [1, 10, 3, 4, 19];
    const result = maximumTripletValue(nums);
    expect(result).toEqual(133);
  });

  it("maximumTripletValue should return 0 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = maximumTripletValue(nums);
    expect(result).toEqual(0);
  });
});
