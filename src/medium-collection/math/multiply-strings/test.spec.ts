import { multiply } from "./solution";

it('multiply should return "6" for num1 = "2", num2 = "3"', () => {
  const num1 = "2";
  const num2 = "3";
  const result = multiply(num1, num2);
  expect(result).toEqual("6");
});

it('multiply should return "56088" for num1 = "123", num2 = "456"', () => {
  const num1 = "123";
  const num2 = "456";
  const result = multiply(num1, num2);
  expect(result).toEqual("56088");
});
