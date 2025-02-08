import { NumberContainers } from "./solution";

describe("Design a Number Container System", () => {
  it("NumberContainers should pass test 1", () => {
    var nc = new NumberContainers();
    expect(nc.find(10)).toEqual(-1); // There is no index that is filled with number 10. Therefore, we return -1.
    nc.change(2, 10); // Your container at index 2 will be filled with number 10.
    nc.change(1, 10); // Your container at index 1 will be filled with number 10.
    nc.change(3, 10); // Your container at index 3 will be filled with number 10.
    nc.change(5, 10); // Your container at index 5 will be filled with number 10.
    expect(nc.find(10)).toEqual(1); // Number 10 is at the indices 1, 2, 3, and 5. Since the smallest index that is filled with 10 is 1, we return 1.
    nc.change(1, 20); // Your container at index 1 will be filled with number 20. Note that index 1 was filled with 10 and then replaced with 20.
    expect(nc.find(10)).toEqual(2); // Number 10 is at the indices 2, 3, and 5. The smallest index that is filled with 10 is 2. Therefore, we return 2.
  });
});
