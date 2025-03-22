import { countCompleteComponents } from "./solution";

describe("Count the Number of Complete Components", () => {
  it("countCompleteComponents should return 3 for n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]", () => {
    const n = 6;
    const edges = [
      [0, 1],
      [0, 2],
      [1, 2],
      [3, 4],
    ];
    const result = countCompleteComponents(n, edges);
    expect(result).toEqual(3);
  });

  it("countCompleteComponents should return 1 for n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]", () => {
    const n = 6;
    const edges = [
      [0, 1],
      [0, 2],
      [1, 2],
      [3, 4],
      [3, 5],
    ];
    const result = countCompleteComponents(n, edges);
    expect(result).toEqual(1);
  });
});
