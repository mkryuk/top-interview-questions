import { duplicateZeros } from "./solution-o1";

describe("Duplicate Zeros", () => {
  it("duplicateZeros should return [1,0,0,2,3,0,0,4] for arr = [1,0,2,3,0,4,5,0]", () => {
    const arr = [1, 0, 2, 3, 0, 4, 5, 0];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });

  it("duplicateZeros should return [1,2,3] for arr = [1,2,3]", () => {
    const arr = [1, 2, 3];
    duplicateZeros(arr);
    expect(arr).toEqual([1, 2, 3]);
  });

  it("duplicateZeros should return [8,4,5,0,0,0,0,0] for arr = [8,4,5,0,0,0,0,7]", () => {
    const arr = [8, 4, 5, 0, 0, 0, 0, 7];
    duplicateZeros(arr);
    expect(arr).toEqual([8, 4, 5, 0, 0, 0, 0, 0]);
  });
});
