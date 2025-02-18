import { smallestNumber } from "./solution";

describe("Construct Smallest Number From DI String", () => {
  it('smallestNumber should return "123549876" for pattern = "IIIDIDDD"', () => {
    const pattern = "IIIDIDDD";
    const result = smallestNumber(pattern);
    expect(result).toEqual("123549876");
  });

  it('smallestNumber should return "4321" for pattern = "DDD"', () => {
    const pattern = "DDD";
    const result = smallestNumber(pattern);
    expect(result).toEqual("4321");
  });
});
