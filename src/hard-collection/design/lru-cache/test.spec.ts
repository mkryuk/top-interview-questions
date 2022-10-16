import { LRUCache } from "./solution";
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]
it("LRUCache should pass test 1", () => {
  const lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  expect(lRUCache.get(1)).toEqual(1); // return 1
  lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  expect(lRUCache.get(2)).toEqual(-1); // returns -1 (not found)
  lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  expect(lRUCache.get(1)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(3)).toEqual(3); // return 3
  expect(lRUCache.get(4)).toEqual(4); // return 4
});
