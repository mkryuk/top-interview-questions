import { maxJumps } from "./solution";

describe("1340. Jump Game V:", () => {
  it("maxJumps should return 4 for arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2", () => {
    const arr = [6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12];
    const d = 2;
    const result = maxJumps(arr, d);
    expect(result).toEqual(4);
  });

  it("maxJumps should return 1 for arr = [3,3,3,3,3], d = 3", () => {
    const arr = [3, 3, 3, 3, 3];
    const d = 3;
    const result = maxJumps(arr, d);
    expect(result).toEqual(1);
  });

  it("maxJumps should return 7 for arr = [7,6,5,4,3,2,1], d = 1", () => {
    const arr = [7, 6, 5, 4, 3, 2, 1];
    const d = 1;
    const result = maxJumps(arr, d);
    expect(result).toEqual(7);
  });
});
