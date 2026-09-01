import { minMoves } from "./solution";

describe("3568. Minimum Moves to Clean the Classroom:", () => {
  it('minMoves should return 2 for classroom = ["S.", "XL"], energy = 2', () => {
    const classroom = ["S.", "XL"];
    const energy = 2;
    const result = minMoves(classroom, energy);
    expect(result).toEqual(2);
  });

  it('minMoves should return 3 for classroom = ["LS", "RL"], energy = 4', () => {
    const classroom = ["LS", "RL"];
    const energy = 4;
    const result = minMoves(classroom, energy);
    expect(result).toEqual(3);
  });

  it('minMoves should return -1 for classroom = ["L.S", "RXL"], energy = 3', () => {
    const classroom = ["L.S", "RXL"];
    const energy = 3;
    const result = minMoves(classroom, energy);
    expect(result).toEqual(-1);
  });
});
