import { MyHashSet } from "./solution";

describe("Design HashSet:", () => {
  it("should pass test 1", () => {
    var myHashSet = new MyHashSet();
    myHashSet.add(1); // set = [1]
    myHashSet.add(2); // set = [1, 2]
    expect(myHashSet.contains(1)).toBeTrue(); // return True
    expect(myHashSet.contains(3)).toBeFalse(); // return False, (not found)
    myHashSet.add(2); // set = [1, 2]
    expect(myHashSet.contains(2)).toBeTrue(); // return True
    myHashSet.remove(2); // set = [1]
    expect(myHashSet.contains(2)).toBeFalse(); // return False, (already removed)
  });

  it("should pass test 2", () => {
    var myHashSet = new MyHashSet();
    myHashSet.add(1000000);
    expect(myHashSet.contains(1000000)).toBeTrue(); // return True
  });
});
