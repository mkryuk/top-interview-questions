import { kthGrammar } from "./solution";

describe("K-th Symbol in Grammar:", () => {
  it("kthGrammar should return 0 for n = 1, k = 1", () => {
    const n = 1;
    const k = 1;
    const result = kthGrammar(n, k);
    expect(result).toEqual(0);
  });

  it("kthGrammar should return 0 for n = 2, k = 1", () => {
    const n = 2;
    const k = 1;
    const result = kthGrammar(n, k);
    expect(result).toEqual(0);
  });

  it("kthGrammar should return 1 for n = 2, k = 2", () => {
    const n = 2;
    const k = 2;
    const result = kthGrammar(n, k);
    expect(result).toEqual(1);
  });
});
