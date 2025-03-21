import { findAllRecipes } from "./solution";

describe("Find All Possible Recipes from Given Supplies", () => {
  it('findAllRecipes should return ["bread"] for recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]', () => {
    const recipes = ["bread"];
    const ingredients = [["yeast", "flour"]];
    const supplies = ["yeast", "flour", "corn"];
    const result = findAllRecipes(recipes, ingredients, supplies);
    expect(result).toEqual(["bread"]);
  });

  it('findAllRecipes should return ["bread","sandwich"] for recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]', () => {
    const recipes = ["bread", "sandwich"];
    const ingredients = [
      ["yeast", "flour"],
      ["bread", "meat"],
    ];
    const supplies = ["yeast", "flour", "meat"];
    const result = findAllRecipes(recipes, ingredients, supplies);
    expect(result).toEqual(["bread", "sandwich"]);
  });

  it('findAllRecipes should return ["bread","sandwich","burger"] for recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]', () => {
    const recipes = ["bread", "sandwich", "burger"];
    const ingredients = [
      ["yeast", "flour"],
      ["bread", "meat"],
      ["sandwich", "meat", "bread"],
    ];
    const supplies = ["yeast", "flour", "meat"];
    const result = findAllRecipes(recipes, ingredients, supplies);
    expect(result).toEqual(["bread", "sandwich", "burger"]);
  });
});
