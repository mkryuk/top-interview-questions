import { countSeniors } from "./solution";

describe("Number of Senior Citizens:", () => {
  it('countSeniors should return 2 for details = ["7868190130M7522","5303914400F9211","9273338290F4010"]', () => {
    const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];
    const result = countSeniors(details);
    expect(result).toEqual(2);
  });

  it('countSeniors should return 0 for details = ["1313579440F2036","2921522980M5644"]', () => {
    const details = ["1313579440F2036", "2921522980M5644"];
    const result = countSeniors(details);
    expect(result).toEqual(0);
  });
});
