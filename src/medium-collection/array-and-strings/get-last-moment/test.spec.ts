import { getLastMoment } from "./solution";

describe("Last Moment Before All Ants Fall Out of a Plank:", () => {
  it("getLastMoment should return 4 for n = 4, left = [4,3], right = [0,1]", () => {
    const n = 4;
    const left = [4, 3];
    const right = [0, 1];
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(4);
  });

  it("getLastMoment should return 7 for n = 7, left = [], right = [0,1,2,3,4,5,6,7]", () => {
    const n = 7;
    const left: number[] = [];
    const right = [0, 1, 2, 3, 4, 5, 6, 7];
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(7);
  });

  it("getLastMoment should return 7 for n = 7, left = [0,1,2,3,4,5,6,7], right = []", () => {
    const n = 7;
    const left = [0, 1, 2, 3, 4, 5, 6, 7];
    const right: number[] = [];
    const result = getLastMoment(n, left, right);
    expect(result).toEqual(7);
  });
});
