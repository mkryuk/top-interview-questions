import { areSentencesSimilar } from "./solution";

describe("Sentence Similarity III", () => {
  it('areSentencesSimilar should return true for sentence1 = "My name is Haley", sentence2 = "My Haley"', () => {
    const sentence1 = "My name is Haley";
    const sentence2 = "My Haley";
    const result = areSentencesSimilar(sentence1, sentence2);
    expect(result).toBeTrue();
  });

  it('areSentencesSimilar should return false for sentence1 = "of", sentence2 = "A lot of words"', () => {
    const sentence1 = "of";
    const sentence2 = "A lot of words";
    const result = areSentencesSimilar(sentence1, sentence2);
    expect(result).toBeFalse();
  });

  it('areSentencesSimilar should return true for sentence1 = "Eating right now", sentence2 = "Eating"', () => {
    const sentence1 = "Eating right now";
    const sentence2 = "Eating";
    const result = areSentencesSimilar(sentence1, sentence2);
    expect(result).toBeTrue();
  });
});
