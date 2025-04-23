import { countLargestGroup } from "./solution";

describe("Count Largest Group", () => {
  it("countLargestGroup should return 4 for n = 13", () => {
    const n = 13;
    const result = countLargestGroup(n);
    expect(result).toEqual(4);
  });

  it("countLargestGroup should return 2 for n = 2", () => {
    const n = 2;
    const result = countLargestGroup(n);
    expect(result).toEqual(2);
  });
});
