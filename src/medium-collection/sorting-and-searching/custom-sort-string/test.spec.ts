import { customSortString } from "./solution";

describe("Custom Sort String:", () => {
  it('customSortString should return "cbad" for order = "cba", s = "abcd"', () => {
    const order = "cba";
    const s = "abcd";
    const result = customSortString(order, s);
    expect(result).toEqual("cbad");
  });

  it('customSortString should return "bcad" for order = "bcafg", s = "abcd" ', () => {
    const order = "bcafg";
    const s = "abcd";
    const result = customSortString(order, s);
    expect(result).toEqual("bcad");
  });
});
