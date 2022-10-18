import { LRUCache } from "./solution";

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

it("LRUCache should pass test 2", () => {
  const lRUCache = new LRUCache(3);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  lRUCache.put(3, 3); // cache is {1=1, 2=2, 3=3}
  expect(lRUCache.get(1)).toEqual(1); // return 1
  expect(lRUCache.get(2)).toEqual(2); // return 1
  lRUCache.put(4, 4); // cache is {1=1, 2=2, 4=4}
  expect(lRUCache.get(2)).toEqual(2); // return 2
  lRUCache.put(5, 5); // cache is {2=2, 4=4, 5=5}
  expect(lRUCache.get(1)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(2)).toEqual(2); // return 2
  expect(lRUCache.get(3)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(4)).toEqual(4); // return 4
  expect(lRUCache.get(5)).toEqual(5); // return 5
});

it("LRUCache should pass test 3", () => {
  const lRUCache = new LRUCache(1);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.put(2, 2); // cache is {2=2}
  lRUCache.put(3, 3); // cache is {3=3}
  expect(lRUCache.get(1)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(2)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(3)).toEqual(3); // return 3
  lRUCache.put(4, 4); // cache is {4=4}
  expect(lRUCache.get(3)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(4)).toEqual(4); // return 4
});

it("LRUCache should pass test 3", () => {
  const lRUCache = new LRUCache(3);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  lRUCache.put(3, 3); // cache is {1=1, 2=2, 3=3}
  lRUCache.put(4, 4); // cache is {2=2, 3=3, 4=4}
  expect(lRUCache.get(4)).toEqual(4); // return 4
  expect(lRUCache.get(3)).toEqual(3); // return 3
  expect(lRUCache.get(2)).toEqual(2); // return 2
  expect(lRUCache.get(1)).toEqual(-1); // return -1 (not found)
  lRUCache.put(5, 5); // cache is {4=4}
  expect(lRUCache.get(1)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(2)).toEqual(2); // return 2
  expect(lRUCache.get(3)).toEqual(3); // return 3
  expect(lRUCache.get(4)).toEqual(-1); // return -1 (not found)
  expect(lRUCache.get(5)).toEqual(5); // return 5
});
