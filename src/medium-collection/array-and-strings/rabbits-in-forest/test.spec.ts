import { numRabbits } from "./solution";

describe("Rabbits in Forest", () => {
  it("numRabbits should return 5 answers = [1,1,2]", () => {
    const answers = [1, 1, 2];
    const result = numRabbits(answers);
    expect(result).toEqual(5);
  });

  it("numRabbits should return 11 answers = [10,10,10]", () => {
    const answers = [10, 10, 10];
    const result = numRabbits(answers);
    expect(result).toEqual(11);
  });

  it("numRabbits should return 20 answers = [1,2,3,4,5]", () => {
    const answers = [1, 2, 3, 4, 5];
    const result = numRabbits(answers);
    expect(result).toEqual(20);
  });

  it("numRabbits should return 7 answers = [1,1,1,2,2]", () => {
    const answers = [1, 1, 1, 2, 2];
    const result = numRabbits(answers);
    expect(result).toEqual(7);
  });
});
