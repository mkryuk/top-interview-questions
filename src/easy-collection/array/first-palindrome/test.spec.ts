import { firstPalindrome } from "./solution";

describe("Find First Palindromic String in the Array:", () => {
  it('firstPalindrome should return "ada" for words = ["abc","car","ada","racecar","cool"]', () => {
    const words = ["abc", "car", "ada", "racecar", "cool"];
    const result = firstPalindrome(words);
    expect(result).toEqual("ada");
  });

  it('firstPalindrome should return "racecar" for words = ["notapalindrome","racecar"]', () => {
    const words = ["notapalindrome", "racecar"];
    const result = firstPalindrome(words);
    expect(result).toEqual("racecar");
  });

  it('firstPalindrome should return "" for words = ["def","ghi"]', () => {
    const words = ["def", "ghi"];
    const result = firstPalindrome(words);
    expect(result).toEqual("");
  });
});
