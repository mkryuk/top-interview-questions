import { checkRecord } from "./solution";

describe("Student Attendance Record II", () => {
  it("checkRecord should return 8 n = 2", () => {
    const n = 2;
    const result = checkRecord(n);
    expect(result).toEqual(8);
  });

  it("checkRecord should return 3 n = 1", () => {
    const n = 1;
    const result = checkRecord(n);
    expect(result).toEqual(3);
  });

  it("checkRecord should return 183236316 n = 10101", () => {
    const n = 10101;
    const result = checkRecord(n);
    expect(result).toEqual(183236316);
  });
});
