import { countStudents } from "./solution";

describe("Number of Students Unable to Eat Lunch", () => {
  it("countStudents should return 0 for students = [1,1,0,0], sandwiches = [0,1,0,1]", () => {
    const students = [1, 1, 0, 0];
    const sandwiches = [0, 1, 0, 1];
    const result = countStudents(students, sandwiches);
    expect(result).toEqual(0);
  });

  it("countStudents should return 3 for students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]", () => {
    const students = [1, 1, 1, 0, 0, 1];
    const sandwiches = [1, 0, 0, 0, 1, 1];
    const result = countStudents(students, sandwiches);
    expect(result).toEqual(3);
  });
});
