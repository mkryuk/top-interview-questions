import { truncateSentence } from "./solution";

describe("Truncate Sentence", () => {
  it('truncateSentence should return "Hello how are you" for s = "Hello how are you Contestant", k = 4', () => {
    const s = "Hello how are you Contestant";
    const k = 4;
    const result = truncateSentence(s, k);
    expect(result).toEqual("Hello how are you");
  });

  it('truncateSentence should return "What is the solution" for s = "What is the solution to this problem", k = 4', () => {
    const s = "What is the solution to this problem";
    const k = 4;
    const result = truncateSentence(s, k);
    expect(result).toEqual("What is the solution");
  });

  it('truncateSentence should return "chopper is not a tanuki" for s = "chopper is not a tanuki", k = 5', () => {
    const s = "chopper is not a tanuki";
    const k = 5;
    const result = truncateSentence(s, k);
    expect(result).toEqual("chopper is not a tanuki");
  });
});
