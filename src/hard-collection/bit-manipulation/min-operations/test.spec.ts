import { minOperations } from "./solution";

describe("3495. Minimum Operations to Make Array Elements Zero", () => {
  it("minOperations should return 3 for queries = [[1,2],[2,4]]", () => {
    const queries = [
      [1, 2],
      [2, 4],
    ];
    const result = minOperations(queries);
    expect(result).toEqual(3);
  });

  it("minOperations should return 4 for queries = [[2,6]]", () => {
    const queries = [[2, 6]];
    const result = minOperations(queries);
    expect(result).toEqual(4);
  });
});
