import { findDifferentBinaryString } from "./solution";

describe("Find Unique Binary String:", () => {
  it('findDifferentBinaryString should return "11" for nums = ["01","10"]', () => {
    const nums = ["01", "10"];
    const result = findDifferentBinaryString(nums);
    expect(result).toEqual("11");
  });

  it('findDifferentBinaryString should return "11" for nums = ["00","01"]', () => {
    const nums = ["00", "01"];
    const result = findDifferentBinaryString(nums);
    expect(result).toEqual("11");
  });

  it('findDifferentBinaryString should return "101" for nums = ["111","011","001"]', () => {
    const nums = ["111", "011", "001"];
    const result = findDifferentBinaryString(nums);
    expect(result).toEqual("101");
  });
});
