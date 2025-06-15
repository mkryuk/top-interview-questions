import { maxDiff } from "./solution";

describe("1432. Max Difference You Can Get From Changing an Integer", () => {
  it("maxDiff should return 888 for num = 555", () => {
    const num = 555;
    const result = maxDiff(num);
    expect(result).toEqual(888);
  });

  it("maxDiff should return 8 for num = 9", () => {
    const num = 9;
    const result = maxDiff(num);
    expect(result).toEqual(8);
  });
});
