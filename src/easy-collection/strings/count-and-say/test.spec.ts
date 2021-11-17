import { countAndSay } from "./solution";

it('countAndSay should return "1" for n = 1', function () {
  const n = 1;
  const result = countAndSay(n);
  expect(result).toEqual("1");
});

it('countAndSay should return "1211" for n = 4', function () {
  const n = 4;
  const result = countAndSay(n);
  expect(result).toEqual("1211");
});
