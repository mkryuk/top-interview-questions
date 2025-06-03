import { maxCandies } from "./solution";

describe("1298. Maximum Candies You Can Get from Boxes", () => {
  it("maxCandies should return 16 for status = [1,0,1,0], candies = [7,5,4,100], keys = [[],[],[1],[]], containedBoxes = [[1,2],[3],[],[]], initialBoxes = [0]", () => {
    const status = [1, 0, 1, 0];
    const candies = [7, 5, 4, 100];
    const keys = [[], [], [1], []];
    const containedBoxes = [[1, 2], [3], [], []];
    const initialBoxes = [0];
    const result = maxCandies(status, candies, keys, containedBoxes, initialBoxes);
    expect(result).toEqual(16);
  });

  it("maxCandies should return 6 for status = [1,0,0,0,0,0], candies = [1,1,1,1,1,1], keys = [[1,2,3,4,5],[],[],[],[],[]], containedBoxes = [[1,2,3,4,5],[],[],[],[],[]], initialBoxes = [0]", () => {
    const status = [1, 0, 0, 0, 0, 0];
    const candies = [1, 1, 1, 1, 1, 1];
    const keys = [[1, 2, 3, 4, 5], [], [], [], [], []];
    const containedBoxes = [[1, 2, 3, 4, 5], [], [], [], [], []];
    const initialBoxes = [0];
    const result = maxCandies(status, candies, keys, containedBoxes, initialBoxes);
    expect(result).toEqual(6);
  });
});
