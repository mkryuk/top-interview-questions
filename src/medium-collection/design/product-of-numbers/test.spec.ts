import { ProductOfNumbers } from "./solution";

describe("Product of the Last K Numbers", () => {
  it("ProductOfNumbers should pass test 1", () => {
    var productOfNumbers = new ProductOfNumbers();
    productOfNumbers.add(3); // [3]
    productOfNumbers.add(0); // [3,0]
    productOfNumbers.add(2); // [3,0,2]
    productOfNumbers.add(5); // [3,0,2,5]
    productOfNumbers.add(4); // [3,0,2,5,4]
    expect(productOfNumbers.getProduct(2)).toEqual(20); // return 20. The product of the last 2 numbers is 5 * 4 = 20
    expect(productOfNumbers.getProduct(3)).toEqual(40); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
    expect(productOfNumbers.getProduct(4)).toEqual(0); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
    productOfNumbers.add(8); // [3,0,2,5,4,8]
    expect(productOfNumbers.getProduct(2)).toEqual(32); // return 32. The product of the last 2 numbers is 4 * 8 = 32
  });
});
