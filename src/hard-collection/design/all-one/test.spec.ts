import { AllOne } from "./solution";

describe(" All O`one Data Structure", () => {
  it("AllOne should pass test 1", () => {
    const allOne = new AllOne();
    allOne.inc("hello");
    allOne.inc("hello");
    expect(allOne.getMaxKey()).toEqual("hello");
    expect(allOne.getMinKey()).toEqual("hello");
    allOne.inc("leet");
    expect(allOne.getMaxKey()).toEqual("hello");
    expect(allOne.getMinKey()).toEqual("test");
  });
});
