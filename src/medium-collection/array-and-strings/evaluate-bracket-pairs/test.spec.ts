import { evaluate } from "./solution";

describe("1807. Evaluate the Bracket Pairs of a String:", () => {
  it("evaluate should replace known keys with their values", () => {
    const s = "(name)is(age)yearsold";
    const knowledge = [
      ["name", "bob"],
      ["age", "two"],
    ];
    const result = evaluate(s, knowledge);
    expect(result).toEqual("bobistwoyearsold");
  });

  it("evaluate should replace an unknown key with a question mark", () => {
    const s = "hi(name)";
    const knowledge = [["a", "b"]];
    const result = evaluate(s, knowledge);
    expect(result).toEqual("hi?");
  });

  it("evaluate should replace repeated keys and preserve text outside brackets", () => {
    const s = "(a)(a)(a)aaa";
    const knowledge = [["a", "yes"]];
    const result = evaluate(s, knowledge);
    expect(result).toEqual("yesyesyesaaa");
  });
});
