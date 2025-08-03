import { maxTotalFruits } from "./solution";

describe("2106. Maximum Fruits Harvested After at Most K Steps", () => {
  it("maxTotalFruits should return 9 for fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4", () => {
    const fruits = [
      [2, 8],
      [6, 3],
      [8, 6],
    ];
    const startPos = 5;
    const k = 4;
    const result = maxTotalFruits(fruits, startPos, k);
    expect(result).toEqual(9);
  });

  it("maxTotalFruits should return 14 for fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], startPos = 5, k = 4", () => {
    const fruits = [
      [0, 9],
      [4, 1],
      [5, 7],
      [6, 2],
      [7, 4],
      [10, 9],
    ];
    const startPos = 5;
    const k = 4;
    const result = maxTotalFruits(fruits, startPos, k);
    expect(result).toEqual(14);
  });

  it("maxTotalFruits should return 0 for fruits = [[0,3],[6,4],[8,5]], startPos = 3, k = 2", () => {
    const fruits = [
      [0, 3],
      [6, 4],
      [8, 5],
    ];
    const startPos = 3;
    const k = 2;
    const result = maxTotalFruits(fruits, startPos, k);
    expect(result).toEqual(0);
  });
});
