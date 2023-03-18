import { canPlaceFlowers } from "./solution";

describe("Can Place Flowers", () => {
  it("canPlaceFlowers should return true for flowerbed = [1,0,0,0,1], n = 1", () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBeTrue();
  });

  it("canPlaceFlowers should return false for flowerbed = [1,0,0,0,1], n = 2", () => {
    const flowerbed = [1, 0, 0, 0, 1];
    const n = 2;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBeFalse();
  });

  it("canPlaceFlowers should return false for flowerbed = [1,0,0,0,0,1], n = 2", () => {
    const flowerbed = [1, 0, 0, 0, 0, 1];
    const n = 2;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBeFalse();
  });

  it("canPlaceFlowers should return true for flowerbed = [0], n = 1", () => {
    const flowerbed = [0];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBeTrue();
  });

  it("canPlaceFlowers should return true for flowerbed = [0,0], n = 1", () => {
    const flowerbed = [0, 0];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBeTrue();
  });

  it("canPlaceFlowers should return false for flowerbed = [1,0], n = 1", () => {
    const flowerbed = [1, 0];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBeFalse();
  });

  it("canPlaceFlowers should return false for flowerbed = [0,1], n = 1", () => {
    const flowerbed = [0, 1];
    const n = 1;
    const result = canPlaceFlowers(flowerbed, n);
    expect(result).toBeFalse();
  });
});
