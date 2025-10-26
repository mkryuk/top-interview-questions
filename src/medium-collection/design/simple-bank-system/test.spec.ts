import { Bank } from "./solution";

describe("2043. Simple Bank System", () => {
  it("Bank should pass test 1", () => {
    const bank = new Bank([10, 100, 20, 50, 30]);
    expect(bank.withdraw(3, 10)).toBeTrue(); // return true, account 3 has a balance of $20, so it is valid to withdraw $10.
    // Account 3 has $20 - $10 = $10.
    expect(bank.transfer(5, 1, 20)).toBeTrue(); // return true, account 5 has a balance of $30, so it is valid to transfer $20.
    // Account 5 has $30 - $20 = $10, and account 1 has $10 + $20 = $30.
    expect(bank.deposit(5, 20)).toBeTrue(); // return true, it is valid to deposit $20 to account 5.
    // Account 5 has $10 + $20 = $30.
    expect(bank.transfer(3, 4, 15)).toBeFalse(); // return false, the current balance of account 3 is $10,
    // so it is invalid to transfer $15 from it.
    expect(bank.withdraw(10, 50)).toBeFalse(); // return false, it is invalid because account 10 does not exist.
  });
});
