import { peopleAwareOfSecret } from "./solution";

describe("2327. Number of People Aware of a Secret", () => {
  it("peopleAwareOfSecret should return 5 for n = 6, delay = 2, forget = 4", () => {
    const n = 6;
    const delay = 2;
    const forget = 4;
    const result = peopleAwareOfSecret(n, delay, forget);
    expect(result).toEqual(5);
  });

  it("peopleAwareOfSecret should return 6 for n = 4, delay = 1, forget = 3", () => {
    const n = 4;
    const delay = 1;
    const forget = 3;
    const result = peopleAwareOfSecret(n, delay, forget);
    expect(result).toEqual(6);
  });
});
