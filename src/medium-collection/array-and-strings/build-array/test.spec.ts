import { buildArray } from "./solution";

describe("Build an Array With Stack Operations:", () => {
  it('buildArray should return ["Push","Push","Pop","Push"] for target = [1,3], n = 3', () => {
    const target = [1, 3];
    const n = 3;
    const result = buildArray(target, n);
    expect(result).toEqual(["Push", "Push", "Pop", "Push"]);
  });

  it('buildArray should return ["Push","Push","Push"] for target = [1,2,3], n = 3', () => {
    const target = [1, 2, 3];
    const n = 3;
    const result = buildArray(target, n);
    expect(result).toEqual(["Push", "Push", "Push"]);
  });

  it('buildArray should return ["Push","Push"] for target = [1,2], n = 4', () => {
    const target = [1, 2];
    const n = 4;
    const result = buildArray(target, n);
    expect(result).toEqual(["Push", "Push"]);
  });
});
