import { braceExpansionII } from "./solution";

describe("1096. Brace Expansion II:", () => {
  it('braceExpansionII should return ["ac","ad","ae","bc","bd","be"] for expression = "{a,b}{c,{d,e}}"', () => {
    const expression = "{a,b}{c,{d,e}}";
    const result = braceExpansionII(expression);
    expect(result).toEqual(["ac", "ad", "ae", "bc", "bd", "be"]);
  });

  it('braceExpansionII should return ["a","ab","ac","z"] for expression = "{{a,z},a{b,c},{ab,z}}"', () => {
    const expression = "{{a,z},a{b,c},{ab,z}}";
    const result = braceExpansionII(expression);
    expect(result).toEqual(["a", "ab", "ac", "z"]);
  });
});
