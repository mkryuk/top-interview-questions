import { asteroidsDestroyed } from "./solution";

describe("2126. Destroying Asteroids:", () => {
  it("asteroidsDestroyed should return true for mass = 10, asteroids = [3,9,19,5,21]", () => {
    const mass = 10;
    const asteroids = [3, 9, 19, 5, 21];
    const result = asteroidsDestroyed(mass, asteroids);
    expect(result).toEqual(true);
  });

  it("asteroidsDestroyed should return false for mass = 5, asteroids = [4,9,23,4]", () => {
    const mass = 5;
    const asteroids = [4, 9, 23, 4];
    const result = asteroidsDestroyed(mass, asteroids);
    expect(result).toEqual(false);
  });
});
