import { largestSquareArea } from "./solution";

describe("3047. Find the Largest Area of Square Inside Two Rectangles", () => {
  it("largestSquareArea should return 1 for bottomLeft = [[1,1],[2,2],[3,1]], topRight = [[3,3],[4,4],[6,6]]", () => {
    const bottomLeft = [
      [1, 1],
      [2, 2],
      [3, 1],
    ];
    const topRight = [
      [3, 3],
      [4, 4],
      [6, 6],
    ];
    const result = largestSquareArea(bottomLeft, topRight);
    expect(result).toEqual(1);
  });

  it("largestSquareArea should return 4 for bottomLeft = [[1,1],[1,3],[1,5]], topRight = [[5,5],[5,7],[5,9]]", () => {
    const bottomLeft = [
      [1, 1],
      [1, 3],
      [1, 5],
    ];
    const topRight = [
      [5, 5],
      [5, 7],
      [5, 9],
    ];
    const result = largestSquareArea(bottomLeft, topRight);
    expect(result).toEqual(4);
  });

  it("largestSquareArea should return 1 for bottomLeft = [[1,1],[2,2],[1,2]], topRight = [[3,3],[4,4],[3,4]]", () => {
    const bottomLeft = [
      [1, 1],
      [2, 2],
      [1, 2],
    ];
    const topRight = [
      [3, 3],
      [4, 4],
      [3, 4],
    ];
    const result = largestSquareArea(bottomLeft, topRight);
    expect(result).toEqual(1);
  });

  it("largestSquareArea should return 0 for bottomLeft = [[1,1],[3,3],[3,1]], topRight = [[2,2],[4,4],[4,2]]", () => {
    const bottomLeft = [
      [1, 1],
      [3, 3],
      [3, 1],
    ];
    const topRight = [
      [2, 2],
      [4, 4],
      [4, 2],
    ];
    const result = largestSquareArea(bottomLeft, topRight);
    expect(result).toEqual(0);
  });
});
