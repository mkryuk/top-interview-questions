import { matchPlayersAndTrainers } from "./solution";

describe("2410. Maximum Matching of Players With Trainers", () => {
  it("matchPlayersAndTrainers should return 2 for players = [4,7,9], trainers = [8,2,5,8]", () => {
    const players = [4, 7, 9];
    const trainers = [8, 2, 5, 8];
    const result = matchPlayersAndTrainers(players, trainers);
    expect(result).toEqual(2);
  });

  it("matchPlayersAndTrainers should return 1 for players = [1,1,1], trainers = [10]", () => {
    const players = [1, 1, 1];
    const trainers = [10];
    const result = matchPlayersAndTrainers(players, trainers);
    expect(result).toEqual(1);
  });
});
