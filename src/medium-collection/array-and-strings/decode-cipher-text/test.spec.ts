import { decodeCiphertext } from "./solution";

describe("2075. Decode the Slanted Ciphertext:", () => {
  it('decodeCiphertext should return "cipher" for encodedText = "ch   ie   pr", rows = 3', () => {
    const encodedText = "ch   ie   pr";
    const rows = 3;
    const result = decodeCiphertext(encodedText, rows);
    expect(result).toEqual("cipher");
  });

  it('decodeCiphertext should return "i love leetcode" for encodedText = "iveo    eed   l te   olc", rows = 4', () => {
    const encodedText = "iveo    eed   l te   olc";
    const rows = 4;
    const result = decodeCiphertext(encodedText, rows);
    expect(result).toEqual("i love leetcode");
  });

  it('decodeCiphertext should return "coding" for encodedText = "coding", rows = 1', () => {
    const encodedText = "coding";
    const rows = 1;
    const result = decodeCiphertext(encodedText, rows);
    expect(result).toEqual("coding");
  });
});
