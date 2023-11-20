import { garbageCollection } from "./solution";

describe("Minimum Amount of Time to Collect Garbage:", () => {
  it('garbageCollection should return 21 for garbage = ["G","P","GP","GG"], travel = [2,4,3]', () => {
    const garbage = ["G", "P", "GP", "GG"];
    const travel = [2, 4, 3];
    const result = garbageCollection(garbage, travel);
    expect(result).toEqual(21);
  });

  it('garbageCollection should return 37 for garbage = ["MMM","PGM","GP"], travel = [3,10]', () => {
    const garbage = ["G", "P", "GP", "GG"];
    const travel = [2, 4, 3];
    const result = garbageCollection(garbage, travel);
    expect(result).toEqual(37);
  });
});
