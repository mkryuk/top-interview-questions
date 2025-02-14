export class ProductOfNumbers {
  products: number[];
  constructor() {
    this.products = [1];
  }

  add(num: number): void {
    if (num === 0) {
      this.products = [1];
      return;
    }
    const n = this.products.length;
    const prevProduct = this.products[n - 1];
    this.products.push(num * prevProduct);
  }

  getProduct(k: number): number {
    if (this.products.length <= k) {
      return 0;
    }
    const n = this.products.length;
    const lastProduct = this.products[n - 1];
    const kthProduct = this.products[n - k - 1];
    return lastProduct / kthProduct;
  }
}
