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

  it("maxDiff should return 888 for num = 111", () => {
    const num = 111;
    const result = maxDiff(num);
    expect(result).toEqual(888);
  });

  it("maxDiff should return 8808050 for num = 1101057", () => {
    const num = 1101057;
    const result = maxDiff(num);
    expect(result).toEqual(8808050);
  });
});
