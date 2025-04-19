import { finalString } from "./solution";

describe("Faulty Keyboard", () => {
  it('finalString should return "rtsng" for s = "string"', () => {
    const s = "string";
    const result = finalString(s);
    expect(result).toEqual("rtsng");
  });

  it('finalString should return "ponter" for s = "poiinter"', () => {
    const s = "poiinter";
    const result = finalString(s);
    expect(result).toEqual("ponter");
  });
});
