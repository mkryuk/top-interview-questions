import { findMaxPathScore } from "./solution";

describe("3620. Network Recovery Pathways:", () => {
  it("Example 1", () => {
    const edges = [
      [0, 1, 5],
      [1, 3, 10],
      [0, 2, 3],
      [2, 3, 4],
    ];
    const online = [true, true, true, true];
    const k = 10;

    const result = findMaxPathScore(edges, online, k);

    expect(result).toBe(3);
  });

  it("Example 2", () => {
    const edges = [
      [0, 1, 7],
      [1, 4, 5],
      [0, 2, 6],
      [2, 3, 6],
      [3, 4, 2],
      [2, 4, 6],
    ];
    const online = [true, true, true, false, true];
    const k = 12;

    const result = findMaxPathScore(edges, online, k);

    expect(result).toBe(6);
  });
});
