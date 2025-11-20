import { intersectionSizeTwo } from "./solution";

describe("757. Set Intersection Size At Least Two", () => {
  it("intersectionSizeTwo should return 5 for intervals = [[1,3],[3,7],[8,9]]", () => {
    const intervals = [
      [1, 3],
      [3, 7],
      [8, 9],
    ];
    const result = intersectionSizeTwo(intervals);
    expect(result).toEqual(5);
  });

  it("intersectionSizeTwo should return 3 for intervals = [[1,3],[1,4],[2,5],[3,5]]", () => {
    const intervals = [
      [1, 3],
      [1, 4],
      [2, 5],
      [3, 5],
    ];
    const result = intersectionSizeTwo(intervals);
    expect(result).toEqual(3);
  });

  it("intersectionSizeTwo should return 5 for intervals = [[1,2],[2,3],[2,4],[4,5]]", () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [2, 4],
      [4, 5],
    ];
    const result = intersectionSizeTwo(intervals);
    expect(result).toEqual(5);
  });
});
