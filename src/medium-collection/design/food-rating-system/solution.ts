import { Heap } from "../../../hard-collection/design/heap/heap";

type FoodObj = { food: string; rating: number };
type CuisineObj = { cuisine: string; rating: number };

export class FoodRatings {
  foodMap: Map<string, CuisineObj>;
  cuisineMap: Map<string, Heap<FoodObj>>;

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    const n = foods.length;
    this.foodMap = new Map();
    this.cuisineMap = new Map();
    for (let i = 0; i < n; i++) {
      this.foodMap.set(foods[i], { cuisine: cuisines[i], rating: ratings[i] });
      if (!this.cuisineMap.has(cuisines[i])) {
        const pq = new Heap<FoodObj>((a: FoodObj, b: FoodObj) => {
          return a.rating !== b.rating
            ? b.rating - a.rating
            : a.food.localeCompare(b.food);
        });
        this.cuisineMap.set(cuisines[i], pq);
      }
      this.cuisineMap
        .get(cuisines[i])
        ?.push({ food: foods[i], rating: ratings[i] });
    }
  }

  changeRating(food: string, newRating: number): void {
    const cuisine = this.foodMap.get(food)!.cuisine;
    this.cuisineMap.get(cuisine)?.push({ food, rating: newRating });
    this.foodMap.set(food, { cuisine, rating: newRating });
  }

  highestRated(cuisine: string): string {
    const pq = this.cuisineMap.get(cuisine);
    while (this.foodMap.get(pq!.top()!.food)!.rating !== pq!.top()!.rating) {
      pq?.pop();
    }
    return pq!.top()!.food;
  }
}
