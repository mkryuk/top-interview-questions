import { reverseString } from "./solution";

it("reverseString should reverse string 1", () => {
  const s = ["h", "e", "l", "l", "o"];
  reverseString(s);
  expect(s).toEqual(["o", "l", "l", "e", "h"]);
});

it("reverseString should reverse string 2", () => {
  const s = ["H", "a", "n", "n", "a", "h"];
  reverseString(s);
  expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
});
