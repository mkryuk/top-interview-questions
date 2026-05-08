import { minJumps } from "./solution";

describe("3629. Minimum Jumps to Reach End via Prime Teleportation:", () => {
  it("minJumps should return 2 for nums = [1,2,4,6]", () => {
    const nums = [1, 2, 4, 6];
    const result = minJumps(nums);
    expect(result).toEqual(2);
  });

  it("minJumps should return 2 for nums = [2,3,4,7,9]", () => {
    const nums = [2, 3, 4, 7, 9];
    const result = minJumps(nums);
    expect(result).toEqual(2);
  });

  it("minJumps should return 3 for nums = [4,6,5,8]", () => {
    const nums = [4, 6, 5, 8];
    const result = minJumps(nums);
    expect(result).toEqual(3);
  });
});
