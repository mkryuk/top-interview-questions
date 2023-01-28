import { lengthOfLastWord } from "./solution";

it('lengthOfLastWord should return 5 for s = "Hello World"', () => {
  const s = "Hello World";
  const result = lengthOfLastWord(s);
  expect(result).toEqual(5);
});

it('lengthOfLastWord should return 4 for s = "   fly me   to   the moon  "', () => {
  const s = "   fly me   to   the moon  ";
  const result = lengthOfLastWord(s);
  expect(result).toEqual(4);
});

it('lengthOfLastWord should return 6 for s = "luffy is still joyboy"', () => {
  const s = "luffy is still joyboy";
  const result = lengthOfLastWord(s);
  expect(result).toEqual(6);
});
