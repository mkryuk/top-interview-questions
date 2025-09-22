export class MovieRentingSystem {
  // maps "shop#movie" -> price for quick lookup
  private price: Map<string, number>;

  // for each movie id, stores all [price, shop] pairs sorted by (price, shop)
  private movieShops: Map<number, Array<[number, number]>>;

  // tracks currently rented copies as encoded "shop#movie"
  private rented: Set<string>;

  private encode(shop: number, movie: number): string {
    return `${shop}#${movie}`;
  }

  constructor(n: number, entries: number[][]) {
    this.price = new Map();
    this.movieShops = new Map();
    this.rented = new Set();

    // initialize price map and per-movie shop lists
    for (const [shop, movie, p] of entries) {
      const key = this.encode(shop, movie);
      this.price.set(key, p);
      if (!this.movieShops.has(movie)) {
        this.movieShops.set(movie, []);
      }
      this.movieShops.get(movie)!.push([p, shop]);
    }

    // sort each movie's shop list once; never mutated afterwards
    for (const arr of this.movieShops.values()) {
      arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    }
  }

  // return up to 5 cheapest shops with an unrented copy of the given movie
  search(movie: number): number[] {
    const res: number[] = [];
    const arr = this.movieShops.get(movie) || [];
    for (const [p, shop] of arr) {
      if (!this.rented.has(this.encode(shop, movie))) {
        res.push(shop);
        if (res.length === 5) {
          break;
        }
      }
    }
    return res;
  }

  // mark a copy as rented
  rent(shop: number, movie: number): void {
    this.rented.add(this.encode(shop, movie));
  }

  // mark a copy as returned
  drop(shop: number, movie: number): void {
    this.rented.delete(this.encode(shop, movie));
  }

  // return up to 5 cheapest rented copies, sorted by (price, shop, movie)
  report(): number[][] {
    const tmp: Array<[number, number, number]> = []; // [price, shop, movie]

    // gather all currently rented copies
    for (const key of this.rented) {
      const [shopStr, movieStr] = key.split("#");
      const shop = Number(shopStr);
      const movie = Number(movieStr);
      const p = this.price.get(key)!;
      tmp.push([p, shop, movie]);
    }

    // sort rented movies by price, then shop, then movie
    tmp.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    // take top 5
    const res: number[][] = [];
    for (let i = 0; i < tmp.length && i < 5; i++) {
      res.push([tmp[i][1], tmp[i][2]]);
    }
    return res;
  }
}
