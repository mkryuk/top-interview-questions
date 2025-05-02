import { pushDominoes } from "./solution";

describe("838. Push Dominoes", () => {
  it('pushDominoes should return "RR.L" for dominoes = "RR.L"', () => {
    const dominoes = "RR.L";
    const result = pushDominoes(dominoes);
    expect(result).toEqual("RR.L");
  });

  it('pushDominoes should return "LL.RR.LLRRLL.." for dominoes = ".L.R...LR..L.."', () => {
    const dominoes = ".L.R...LR..L..";
    const result = pushDominoes(dominoes);
    expect(result).toEqual("LL.RR.LLRRLL..");
  });
});
