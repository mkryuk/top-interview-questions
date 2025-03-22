export function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
  // map each ingredient to the list of recipes that depend on it.
  const ingredientsToRecipes = new Map<string, string[]>();
  // map each recipe to its count of missing ingredients (in-degree).
  const inDegree = new Map<string, number>();
  for (const recipe of recipes) {
    inDegree.set(recipe, 0);
  }

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (const ing of ingredients[i]) {
      if (!ingredientsToRecipes.has(ing)) {
        ingredientsToRecipes.set(ing, []);
      }
      ingredientsToRecipes.get(ing)!.push(recipe);
      // increase the count of ingredients needed for this recipe.
      inDegree.set(recipe, inDegree.get(recipe)! + 1);
    }
  }

  // start with the supplies (ingredients we have)
  const queue: string[] = [...supplies];
  const result: string[] = [];

  let i = 0;
  while (i < queue.length) {
    const curr = queue[i++];
    // if this ingredient is a dependency for some recipes...
    if (ingredientsToRecipes.has(curr)) {
      for (const dependantRecipe of ingredientsToRecipes.get(curr)!) {
        // decrement the missing ingredients for each dependent recipe.
        inDegree.set(dependantRecipe, inDegree.get(dependantRecipe)! - 1);
        // if all ingredients for this recipe are available, add it to the result.
        if (inDegree.get(dependantRecipe) === 0) {
          result.push(dependantRecipe);
          // the recipe can now act as an ingredient for other recipes.
          queue.push(dependantRecipe);
        }
      }
    }
  }

  return result;
}
