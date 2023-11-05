import { getWinner } from "./solution";

describe("Find the Winner of an Array Game:", () => {
  it("getWinner should return 5 for arr = [2,1,3,5,4,6,7], k = 2", () => {
    const arr = [2, 1, 3, 5, 4, 6, 7];
    const k = 2;
    const result = getWinner(arr, k);
    expect(result).toEqual(5);
  });

  it("getWinner should return 3 for arr = [3,2,1], k = 10", () => {
    const arr = [3, 2, 1];
    const k = 10;
    const result = getWinner(arr, k);
    expect(result).toEqual(3);
  });

  it("getWinner should return 99 for arr = [1,11,22,33,44,55,66,77,88,99], k = 1000000000", () => {
    const arr = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99];
    const k = 1000000000;
    const result = getWinner(arr, k);
    expect(result).toEqual(99);
  });
});
