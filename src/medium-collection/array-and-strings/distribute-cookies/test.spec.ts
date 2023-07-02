import { distributeCookies } from "./solution";

describe("Fair Distribution of Cookies:", () => {
  it("distributeCookies should return 31 for cookies = [8,15,10,20,8], k = 2", () => {
    const cookies = [8, 15, 10, 20, 8];
    const k = 2;
    const result = distributeCookies(cookies, k);
    expect(result).toEqual(31);
  });

  it("distributeCookies should return 7 for cookies = [6,1,3,2,2,4,1,2], k = 3", () => {
    const cookies = [6, 1, 3, 2, 2, 4, 1, 2];
    const k = 3;
    const result = distributeCookies(cookies, k);
    expect(result).toEqual(7);
  });
});
