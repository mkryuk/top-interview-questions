import { Fancy } from "./solution";

describe("1622. Fancy Sequence", () => {
  it("Fancy should pass test 1", () => {
    const fancy = new Fancy();
    fancy.append(2); // fancy sequence: [2]
    fancy.addAll(3); // fancy sequence: [2+3] -> [5]
    fancy.append(7); // fancy sequence: [5, 7]
    fancy.multAll(2); // fancy sequence: [5*2, 7*2] -> [10, 14]
    expect(fancy.getIndex(0)).toEqual(10); // return 10
    fancy.addAll(3); // fancy sequence: [10+3, 14+3] -> [13, 17]
    fancy.append(10); // fancy sequence: [13, 17, 10]
    fancy.multAll(2); // fancy sequence: [13*2, 17*2, 10*2] -> [26, 34, 20]
    expect(fancy.getIndex(0)).toEqual(26); // return 26
    expect(fancy.getIndex(1)).toEqual(34); // return 34
    expect(fancy.getIndex(2)).toEqual(20); // return 20
  });
});
