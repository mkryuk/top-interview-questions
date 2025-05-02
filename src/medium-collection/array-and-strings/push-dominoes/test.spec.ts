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

  it('pushDominoes should return "R...L" for dominoes = "RR.LL"', () => {
    const dominoes = "R...L";
    const result = pushDominoes(dominoes);
    expect(result).toEqual("RR.LL");
  });
});

// "RRRRRRRR..L"
// 10 - 7 - 1 = 2 / 2 = 1

// "RRRRRRRR...L"
// // 9th index should stay
// 11 - 7 - 1 = 3 / 2 = 1
