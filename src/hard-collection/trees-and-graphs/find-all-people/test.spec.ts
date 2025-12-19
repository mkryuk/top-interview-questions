import { findAllPeople } from "./solution";

describe("2092. Find All People With Secret:", () => {
  it("findAllPeople should return [0,1,2,3,5] for test 1", () => {
    const n = 6;
    const meetings = [
      [1, 2, 5],
      [2, 3, 8],
      [1, 5, 10],
    ];
    const firstPerson = 1;
    const result = findAllPeople(n, meetings, firstPerson);
    expect(result).toEqual([0, 1, 2, 3, 5]);
  });

  it("findAllPeople should return [0,1,3] for test 2", () => {
    const n = 4,
      meetings = [
        [3, 1, 3],
        [1, 2, 2],
        [0, 3, 3],
      ];
    const firstPerson = 3;
    const result = findAllPeople(n, meetings, firstPerson);
    expect(result).toEqual([0, 1, 3]);
  });

  it("findAllPeople should return [0,1,2,3,4] for test 3", () => {
    const n = 5;
    const meetings = [
      [3, 4, 2],
      [1, 2, 1],
      [2, 3, 1],
    ];
    const firstPerson = 1;
    const result = findAllPeople(n, meetings, firstPerson);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
});
