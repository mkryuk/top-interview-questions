import { answerString } from "./solution";

describe("3403. Find the Lexicographically Largest String From the Box I", () => {
  it('answerString should return "dbc"', () => {
    const word = "dbca";
    const numFriends = 2;
    const result = answerString(word, numFriends);
    expect(result).toEqual("dbc");
  });

  it('answerString should return "g"', () => {
    const word = "gggg";
    const numFriends = 4;
    const result = answerString(word, numFriends);
    expect(result).toEqual("g");
  });
});
