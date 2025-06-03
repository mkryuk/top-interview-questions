import { candy } from "./solution-optimized";

describe("Candy", () => {
  it("candy should return 5 for ratings = [1,0,2]", () => {
    const ratings = [1, 0, 2];
    const result = candy(ratings);
    expect(result).toEqual(5);
  });

  it("candy should return 4 for ratings = [1,2,2]", () => {
    const ratings = [1, 2, 2];
    const result = candy(ratings);
    expect(result).toEqual(4);
  });

  it("candy should return 7 for ratings = [1,2,3,1]", () => {
    const ratings = [1, 2, 3, 1];
    const result = candy(ratings);
    expect(result).toEqual(7);
  });

  it("candy should return 12 for ratings = [4,3,1,2,3,1]", () => {
    const ratings = [4, 3, 1, 2, 3, 1];
    const result = candy(ratings);
    expect(result).toEqual(12);
  });

  it("candy should return 18 for ratings = [1,6,10,8,7,3,2]", () => {
    const ratings = [1, 6, 10, 8, 7, 3, 2];
    const result = candy(ratings);
    expect(result).toEqual(18);
  });

  it("candy should return 47 for ratings = [1,2,3,5,4,3,2,1,4,3,2,1,3,2,1,1,2,3,4]", () => {
    const ratings = [1, 2, 3, 5, 4, 3, 2, 1, 4, 3, 2, 1, 3, 2, 1, 1, 2, 3, 4];
    const result = candy(ratings);
    expect(result).toEqual(47);
  });

  it("candy should return 13 for ratings = [2,1,1,2,3,4]", () => {
    const ratings = [2, 1, 1, 2, 3, 4];
    const result = candy(ratings);
    expect(result).toEqual(13);
  });
});
