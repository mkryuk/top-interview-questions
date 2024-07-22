import { sortPeople } from "./solution";

describe("Sort the People", () => {
  it('sortPeople should return ["Mary","Emma","John"] for names = ["Mary","John","Emma"], heights = [180,165,170]', () => {
    const names = ["Mary", "John", "Emma"];
    const heights = [180, 165, 170];
    const result = sortPeople(names, heights);
    expect(result).toEqual(["Mary", "Emma", "John"]);
  });

  it('sortPeople should return ["Bob","Alice","Bob"] for names = ["Alice","Bob","Bob"], heights = [155,185,150]', () => {
    const names = ["Alice", "Bob", "Bob"];
    const heights = [155, 185, 150];
    const result = sortPeople(names, heights);
    expect(result).toEqual(["Bob", "Alice", "Bob"]);
  });
});
