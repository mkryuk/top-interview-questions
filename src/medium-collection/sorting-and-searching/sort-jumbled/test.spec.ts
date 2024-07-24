import { sortJumbled } from "./solution";

describe("Sort the Jumbled Numbers", () => {
  it("sortJumbled should return [338,38,991] for mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]", () => {
    const mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6];
    const nums = [991, 338, 38];
    const result = sortJumbled(mapping, nums);
    expect(result).toEqual([338, 38, 991]);
  });

  it("sortJumbled should return [123,456,789] for mapping = [0,1,2,3,4,5,6,7,8,9], nums = [789,456,123]", () => {
    const mapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nums = [789, 456, 123];
    const result = sortJumbled(mapping, nums);
    expect(result).toEqual([123, 456, 789]);
  });
});
