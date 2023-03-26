import { minimizeArrayValue } from "./solution";

describe("Minimize Maximum of Array", () => {
  it("minimizeArrayValue should return 5 for nums = [3,7,1,6]", () => {
    const nums = [3, 7, 1, 6];
    const result = minimizeArrayValue(nums);
    expect(result).toEqual(5);
  });

  it("minimizeArrayValue should return 10 for nums = [10,1]", () => {
    const nums = [10, 1];
    const result = minimizeArrayValue(nums);
    expect(result).toEqual(10);
  });
});
