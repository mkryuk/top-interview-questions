import { imageSmoother } from "./solution";

describe("Image Smoother:", () => {
  it("imageSmoother should return [[0,0,0],[0,0,0],[0,0,0]] for img = [[1,1,1],[1,0,1],[1,1,1]]", () => {
    const img = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const result = imageSmoother(img);
    expect(result).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("imageSmoother should return [[137,141,137],[141,138,141],[137,141,137]] for img = [[100,200,100],[200,50,200],[100,200,100]]", () => {
    const img = [
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100],
    ];
    const result = imageSmoother(img);
    expect(result).toEqual([
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ]);
  });
});
