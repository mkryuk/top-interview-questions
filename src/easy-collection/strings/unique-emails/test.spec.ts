import { numUniqueEmails } from "./solution";

describe("Unique Email Addresses:", () => {
  it("numUniqueEmails should pass test 1", () => {
    let emails = [
      "test.email+alex@leetcode.com",
      "test.e.mail+bob.cathy@leetcode.com",
      "testemail+david@lee.tcode.com",
    ];
    let result = numUniqueEmails(emails);
    expect(result).toEqual(2);
  });

  it("numUniqueEmails should pass test 2", () => {
    let emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];
    let result = numUniqueEmails(emails);
    expect(result).toEqual(3);
  });
});
