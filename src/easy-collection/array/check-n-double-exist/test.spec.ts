import { checkIfExist } from "./solution";

describe("Check If N and Its Double Exist", () => {
  it("checkIfExist should return true for arr = [10,2,5,3]", () => {
    const arr = [10, 2, 5, 3];
    const result = checkIfExist(arr);
    expect(result).toBeTrue();
  });

  it("checkIfExist should return false for arr = [3,1,7,11]", () => {
    const arr = [3, 1, 7, 11];
    const result = checkIfExist(arr);
    expect(result).toBeFalse();
  });

  it("checkIfExist should return false for arr = [-2,0,10,-19,4,6,-8]", () => {
    const arr = [-2, 0, 10, -19, 4, 6, -8];
    const result = checkIfExist(arr);
    expect(result).toBeFalse();
  });
});
