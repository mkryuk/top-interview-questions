import { reverseWords } from "./solution";

describe("Reverse Words in a String III:", () => {
  it('reverseWords should reverse words in s = "Let\'s take LeetCode contest"', () => {
    const s = "Let's take LeetCode contest";
    const result = reverseWords(s);
    expect(result).toEqual("s'teL ekat edoCteeL tsetnoc");
  });

  it('reverseWords should reverse words in s = "God Ding"', () => {
    const s = "God Ding";
    const result = reverseWords(s);
    expect(result).toEqual("doG gniD");
  });
});
