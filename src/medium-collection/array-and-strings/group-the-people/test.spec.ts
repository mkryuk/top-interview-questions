import { groupThePeople } from "./solution";

describe("Group the People Given the Group Size They Belong To:", () => {
  it("groupThePeople should return [[5],[0,1,2],[3,4,6]] for groupSizes = [3,3,3,3,3,1,3]", () => {
    const groupSizes = [3, 3, 3, 3, 3, 1, 3];
    const result = groupThePeople(groupSizes);
    expect(result).toEqual([[0, 1, 2], [5], [3, 4, 6]]);
  });

  it("groupThePeople should return [[1],[0,5],[2,3,4]] for groupSizes = [2,1,3,3,3,2]", () => {
    const groupSizes = [2, 1, 3, 3, 3, 2];
    const result = groupThePeople(groupSizes);
    expect(result).toEqual([[1], [2, 3, 4], [0, 5]]);
  });
});
