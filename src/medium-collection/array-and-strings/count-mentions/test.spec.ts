import { countMentions } from "./solution";

describe("3433. Count Mentions Per User", () => {
  it('countMentions should return [2,2] for numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]', () => {
    const numberOfUsers = 2;
    const events = [
      ["MESSAGE", "10", "id1 id0"],
      ["OFFLINE", "11", "0"],
      ["MESSAGE", "71", "HERE"],
    ];
    const result = countMentions(numberOfUsers, events);
    expect(result).toEqual([2, 2]);
  });

  it('countMentions should return [2,2] for numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]', () => {
    const numberOfUsers = 2;
    const events = [
      ["MESSAGE", "10", "id1 id0"],
      ["OFFLINE", "11", "0"],
      ["MESSAGE", "12", "ALL"],
    ];
    const result = countMentions(numberOfUsers, events);
    expect(result).toEqual([2, 2]);
  });

  it('countMentions should return [0,1] for numberOfUsers = 2, events = [["OFFLINE","10","0"],["MESSAGE","12","HERE"]]', () => {
    const numberOfUsers = 2;
    const events = [
      ["OFFLINE", "10", "0"],
      ["MESSAGE", "12", "HERE"],
    ];
    const result = countMentions(numberOfUsers, events);
    expect(result).toEqual([0, 1]);
  });
});
