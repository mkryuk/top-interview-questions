import { lexicalOrder } from "./solution";

describe("386. Lexicographical Numbers", () => {
  it("lexicalOrder should return [1,10,11,12,13,2,3,4,5,6,7,8,9] for n = 13", () => {
    const n = 13;
    const result = lexicalOrder(n);
    expect(result).toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("lexicalOrder should return [1,2] for n = 2", () => {
    const n = 2;
    const result = lexicalOrder(n);
    expect(result).toEqual([1, 2]);
  });
});
