import { predictPartyVictory } from "./solution-2";

describe("Dota2 Senate", () => {
  it('predictPartyVictory should return "Radiant" for senate = "RD"', () => {
    const senate = "RD";
    const result = predictPartyVictory(senate);
    expect(result).toEqual("Radiant");
  });

  it('predictPartyVictory should return "Dire" for senate = "RDD"', () => {
    const senate = "RDD";
    const result = predictPartyVictory(senate);
    expect(result).toEqual("Dire");
  });
});
