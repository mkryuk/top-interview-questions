import { arrayToTreeNode } from "../../trees-and-graphs/common";
import { deserialize, serialize } from "./solution";

it('should serialize deserialize "1,2,3,null,null,4,null,null,5,null,null,"', () => {
  const data = "1,2,3,null,null,4,null,null,5,null,null,";
  expect(serialize(deserialize(data))).toEqual(data);
});

it('should serialize deserialize "1,2,3,null,null,4,5,null,null,null,null,"', () => {
  const data = "1,2,3,null,null,4,5,null,null,null,null,";
  expect(serialize(deserialize(data))).toEqual(data);
});

it('should serialize deserialize "1,2,3,null,4,null,5,null,null,null,null,"', () => {
  const data = "1,2,3,null,4,null,5,null,null,null,null,";
  expect(serialize(deserialize(data))).toEqual(data);
});

it('should serialize deserialize "1,2,3,4,null,5,null,null,null,null,null,"', () => {
  const data = "1,2,3,4,null,5,null,null,null,null,null,";
  expect(serialize(deserialize(data))).toEqual(data);
});
