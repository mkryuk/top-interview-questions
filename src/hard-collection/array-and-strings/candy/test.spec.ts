import { candy } from "./solution";

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
});
