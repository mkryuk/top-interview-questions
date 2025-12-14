import { validateCoupons } from "./solution";

describe("3606. Coupon Code Validator", () => {
  it('validateCoupons should return ["PHARMA5","SAVE20"] for code = ["SAVE20","","PHARMA5","SAVE@20"], businessLine = ["restaurant","grocery","pharmacy","restaurant"], isActive = [true,true,true,true]', () => {
    const code = ["SAVE20", "", "PHARMA5", "SAVE@20"];
    const businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"];
    const isActive = [true, true, true, true];
    const result = validateCoupons(code, businessLine, isActive);
    expect(result).toEqual(["PHARMA5", "SAVE20"]);
  });

  it('validateCoupons should return ["ELECTRONICS_50"] for code = ["GROCERY15","ELECTRONICS_50","DISCOUNT10"], businessLine = ["grocery","electronics","invalid"], isActive = [false,true,true]', () => {
    const code = ["GROCERY15", "ELECTRONICS_50", "DISCOUNT10"];
    const businessLine = ["grocery", "electronics", "invalid"];
    const isActive = [false, true, true];
    const result = validateCoupons(code, businessLine, isActive);
    expect(result).toEqual(["ELECTRONICS_50"]);
  });
});
