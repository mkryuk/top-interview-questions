import { maxCollectedFruits } from "./solution";

describe("3363. Find the Maximum Number of Fruits Collected", () => {
  it("maxCollectedFruits should return 100 for fruits = [[1,2,3,4],[5,6,8,7],[9,10,11,12],[13,14,15,16]]", () => {
    const fruits = [
      [1, 2, 3, 4],
      [5, 6, 8, 7],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = maxCollectedFruits(fruits);
    expect(result).toEqual(100);
  });

  it("maxCollectedFruits should return 4 for fruits = [[1,1],[1,1]]", () => {
    const fruits = [
      [1, 1],
      [1, 1],
    ];
    const result = maxCollectedFruits(fruits);
    expect(result).toEqual(4);
  });
});
