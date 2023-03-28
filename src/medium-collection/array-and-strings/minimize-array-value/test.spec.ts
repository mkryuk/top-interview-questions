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

  it("minimizeArrayValue should return 4 for nums = [1,1,1,10]", () => {
    const nums = [1, 1, 1, 10];
    const result = minimizeArrayValue(nums);
    expect(result).toEqual(4);
  });

  it("minimizeArrayValue should return 4 for nums = [1,5,1,1,10]", () => {
    const nums = [1, 5, 1, 1, 10];
    const result = minimizeArrayValue(nums);
    expect(result).toEqual(4);
  });

  it("minimizeArrayValue should return 4 for nums = [1,2,1,3,10]", () => {
    const nums = [1, 2, 1, 3, 10];
    const result = minimizeArrayValue(nums);
    expect(result).toEqual(4);
  });
});
