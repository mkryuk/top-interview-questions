import { fizzBuzz } from "./solution-map";

it('fizzBuzz should return ["1","2","Fizz"] for n = 3', () => {
  const n = 3;
  const result = fizzBuzz(n);
  expect(result).toEqual(["1", "2", "Fizz"]);
});
it('fizzBuzz should return ["1","2","Fizz","4","Buzz"] for n = 5', () => {
  const n = 5;
  const result = fizzBuzz(n);
  expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});
it('fizzBuzz should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] for n = 15', () => {
  const n = 15;
  const result = fizzBuzz(n);
  expect(result).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});
