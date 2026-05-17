import { canReach } from "./solution";

describe("1306. Jump Game III:", () => {
  it("canReach should return true for arr = [4,2,3,0,3,1,2], start = 5", () => {
    const arr = [4, 2, 3, 0, 3, 1, 2];
    const start = 5;
    const result = canReach(arr, start);
    expect(result).toEqual(true);
  });

  it("canReach should return true for arr = [4,2,3,0,3,1,2], start = 0", () => {
    const arr = [4, 2, 3, 0, 3, 1, 2];
    const start = 0;
    const result = canReach(arr, start);
    expect(result).toEqual(true);
  });

  it("canReach should return false for arr = [3,0,2,1,2], start = 2", () => {
    const arr = [3, 0, 2, 1, 2];
    const start = 2;
    const result = canReach(arr, start);
    expect(result).toEqual(false);
  });
});
