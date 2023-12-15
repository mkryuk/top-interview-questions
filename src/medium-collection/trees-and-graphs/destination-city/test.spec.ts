import { destCity } from "./solution";

describe("Destination City:", () => {
  it('destCity should return "Sao Paulo" for paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]', () => {
    const paths = [
      ["London", "New York"],
      ["New York", "Lima"],
      ["Lima", "Sao Paulo"],
    ];
    const result = destCity(paths);
    expect(result).toEqual("Sao Paulo");
  });

  it('destCity should return "A" for paths = [["B","C"],["D","B"],["C","A"]]', () => {
    const paths = [
      ["B", "C"],
      ["D", "B"],
      ["C", "A"],
    ];
    const result = destCity(paths);
    expect(result).toEqual("A");
  });

  it('destCity should return "Z" for paths = [["A","Z"]]', () => {
    const paths = [["A", "Z"]];
    const result = destCity(paths);
    expect(result).toEqual("Z");
  });
});
