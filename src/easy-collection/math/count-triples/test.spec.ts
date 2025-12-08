import { countTriples } from "./solution";

describe("1925. Count Square Sum Triples", () => {
  it("countTriples should return 2 for n = 5", () => {
    const n = 5;
    const result = countTriples(n);
    expect(result).toEqual(2);
  });

  it("countTriples should return 4 for n = 10", () => {
    const n = 10;
    const result = countTriples(n);
    expect(result).toEqual(4);
  });
});
