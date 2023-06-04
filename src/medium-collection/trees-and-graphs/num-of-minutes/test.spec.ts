import { numOfMinutes } from "./solution";

describe("Time Needed to Inform All Employees:", () => {
  it("numOfMinutes numOfMinutes should return 0 for n = 1, headID = 0, manager = [-1], informTime = [0]", () => {
    const n = 1;
    const headID = 0;
    const manager = [-1];
    const informTime = [0];
    const result = numOfMinutes(n, headID, manager, informTime);
    expect(result).toEqual(0);
  });

  it("numOfMinutes numOfMinutes should return 1 for n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]", () => {
    const n = 6;
    const headID = 2;
    const manager = [2, 2, -1, 2, 2, 2];
    const informTime = [0, 0, 1, 0, 0, 0];
    const result = numOfMinutes(n, headID, manager, informTime);
    expect(result).toEqual(1);
  });

  it("numOfMinutes numOfMinutes should return 3 for n = 9, headID = O, manager = [-1,0,0,0,1,2,3,5,5], informTime = [1,1,1,1,0,1,0,0,0]", () => {
    const n = 9;
    const headID = 0;
    const manager = [-1, 0, 0, 0, 1, 2, 3, 5, 5];
    const informTime = [1, 1, 1, 1, 0, 1, 0, 0, 0];
    const result = numOfMinutes(n, headID, manager, informTime);
    expect(result).toEqual(3);
  });

  it("numOfMinutes numOfMinutes should return 3 for n = 9, headID = O, manager = [-1,0,0,0,1,2,3,5,5], informTime = [1,2,1,1,0,1,0,0,0]", () => {
    const n = 9;
    const headID = 0;
    const manager = [-1, 0, 0, 0, 1, 2, 3, 5, 5];
    const informTime = [1, 2, 1, 1, 0, 1, 0, 0, 0];
    const result = numOfMinutes(n, headID, manager, informTime);
    expect(result).toEqual(3);
  });

  it("numOfMinutes numOfMinutes should return 3 for n = 9, headID = O, manager = [-1,0,0,0,1,2,3,5,5], informTime = [1,1,2,1,0,1,0,0,0]", () => {
    const n = 9;
    const headID = 0;
    const manager = [-1, 0, 0, 0, 1, 2, 3, 5, 5];
    const informTime = [1, 1, 2, 1, 0, 1, 0, 0, 0];
    const result = numOfMinutes(n, headID, manager, informTime);
    expect(result).toEqual(4);
  });
});
