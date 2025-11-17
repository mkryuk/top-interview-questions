import { kLengthApart } from "./solution";

describe("1437. Check If All 1's Are at Least Length K Places Away", () => {
  it("kLengthApart should return true for nums = [1,0,0,0,1,0,0,1], k = 2", () => {
    const nums = [1, 0, 0, 0, 1, 0, 0, 1];
    const k = 2;
    const result = kLengthApart(nums, k);
    expect(result).toBeTrue();
  });

  it("kLengthApart should return false for nums = [1,0,0,1,0,1], k = 2", () => {
    const nums = [1, 0, 0, 1, 0, 1];
    const k = 2;
    const result = kLengthApart(nums, k);
    expect(result).toBeFalse();
  });
});
