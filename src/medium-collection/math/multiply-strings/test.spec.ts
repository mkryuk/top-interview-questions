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

it('multiply should return "0" for num1 = "2", num2 = "0"', () => {
  const num1 = "2";
  const num2 = "0";
  const result = multiply(num1, num2);
  expect(result).toEqual("0");
});

it('multiply should return "42" for num1 = "42", num2 = "1"', () => {
  const num1 = "42";
  const num2 = "1";
  const result = multiply(num1, num2);
  expect(result).toEqual("1");
});

it('multiply should return "12345678898765432110" for num1 = "1234567890", num2 = "9999999999"', () => {
  const num1 = "1234567890";
  const num2 = "9999999999";
  const result = multiply(num1, num2);
  expect(result).toEqual("12345678898765432110");
});
