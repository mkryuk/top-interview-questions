import { maximumInvitations } from "./solution";

describe("Maximum Employees to Be Invited to a Meeting", () => {
  it("maximumInvitations should return 3 for favorite = [2,2,1,2]", () => {
    const favorite = [2, 2, 1, 2];
    const result = maximumInvitations(favorite);
    expect(result).toBe(3);
  });

  it("maximumInvitations should return 3 for favorite = [1,2,0]", () => {
    const favorite = [1, 2, 0];
    const result = maximumInvitations(favorite);
    expect(result).toBe(3);
  });

  it("maximumInvitations should return 4 for favorite = [3,0,1,4,1]", () => {
    const favorite = [3, 0, 1, 4, 1];
    const result = maximumInvitations(favorite);
    expect(result).toBe(4);
  });
});
