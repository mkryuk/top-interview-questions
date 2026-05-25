import { canReach } from "./solution";

describe("1871. Jump Game VII:", () => {
  it('canReach should return true for s = "011010", minJump = 2, maxJump = 3', () => {
    const s = "011010";
    const minJump = 2;
    const maxJump = 3;
    const result = canReach(s, minJump, maxJump);
    expect(result).toEqual(true);
  });

  it('canReach should return false for s = "01101110", minJump = 2, maxJump = 3', () => {
    const s = "01101110";
    const minJump = 2;
    const maxJump = 3;
    const result = canReach(s, minJump, maxJump);
    expect(result).toEqual(false);
  });
});
