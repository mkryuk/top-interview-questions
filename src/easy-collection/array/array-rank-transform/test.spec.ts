import { arrayRankTransform } from "./solution";

describe("Rank Transform of an Array", () => {
  it("arrayRankTransform should return [4,1,2,3] for arr = [40,10,20,30]", () => {
    const arr = [40, 10, 20, 30];
    const result = arrayRankTransform(arr);
    expect(result).toEqual([4, 1, 2, 3]);
  });

  it("arrayRankTransform should return [1,1,1] for arr = [100,100,100]", () => {
    const arr = [100, 100, 100];
    const result = arrayRankTransform(arr);
    expect(result).toEqual([1, 1, 1]);
  });

  it("arrayRankTransform should return [5,3,4,2,8,6,7,1,3] for arr = [37,12,28,9,100,56,80,5,12]", () => {
    const arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
    const result = arrayRankTransform(arr);
    expect(result).toEqual([5, 3, 4, 2, 8, 6, 7, 1, 3]);
  });
});
