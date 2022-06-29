import { ladderLength } from "./solution";

it('ladderLength should return 5 for beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', () => {
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  const result = ladderLength(beginWord, endWord, wordList);
  expect(result).toEqual(5);
});

it('ladderLength should return 0 for beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', () => {
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log"];
  const result = ladderLength(beginWord, endWord, wordList);
  expect(result).toEqual(0);
});

it('ladderLength should return 3for beginWord = "dot", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', () => {
  const beginWord = "dot";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  const result = ladderLength(beginWord, endWord, wordList);
  expect(result).toEqual(3);
});
