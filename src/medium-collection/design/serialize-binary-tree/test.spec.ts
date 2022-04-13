import { arrayToTreeNode } from "../../trees-and-graphs/common";
import { deserialize, serialize } from "./solution";

it("should serialize [1,2,3,null,null,4,5]", () => {
  const array = [1, 2, 3, null, null, 4, 5];
  const root = arrayToTreeNode(array);
  expect(serialize(root)).toEqual("1,2,3,null,null,4,5");
});

it('should deserialize "1,2,3,null,null,4,5"', () => {
  const array = [1, 2, 3, null, null, 4, 5];
  const root = arrayToTreeNode(array);
  expect(deserialize("1,2,3,null,null,4,5")).toEqual(root);
});
