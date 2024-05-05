import { once } from "./solution";

describe("Allow One Function Call", () => {
  it("once should pass test 1", () => {
    const fn = (a: number, b: number, c: number) => a + b + c;
    const calls = [
      [1, 2, 3],
      [2, 3, 6],
    ];
    const onceFn = once(fn);
    expect(onceFn(1, 2, 3) as number).toEqual(6);
    expect(onceFn(2, 3, 6)).toBeUndefined();
  });

  it("once should pass test 2", () => {
    const fn = (a: number, b: number, c: number) => a * b * c;
    const calls = [
      [5, 7, 4],
      [2, 3, 6],
      [4, 6, 8],
    ];
    const onceFn = once(fn);
    expect(onceFn(5, 7, 4) as number).toEqual(140);
    expect(onceFn(2, 3, 6)).toBeUndefined();
    expect(onceFn(4, 6, 8)).toBeUndefined;
  });
});
