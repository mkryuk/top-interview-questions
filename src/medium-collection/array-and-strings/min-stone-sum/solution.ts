export function minStoneSum(piles: number[], k: number): number {
  // Create a max heap from the piles array
  const heap = new MaxHeap(piles);
  while (k > 0) {
    // Remove the max element from the heap
    const max = heap.extractMax()!;
    // Divide the element by 2 and re-insert it into the heap
    heap.insert(max - Math.floor(max / 2));
    // Decrement k
    k--;
  }
  // Return the sum of the elements in the heap
  return heap.sum();
}

class MaxHeap {
  private piles: number[];

  constructor(piles: number[]) {
    this.piles = piles;
    this.buildHeap();
  }

  private buildHeap() {
    // Start at the last non-leaf node
    for (let i = Math.floor(this.piles.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  private heapify(index: number) {
    // Find the indices of the left and right children
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;
    // If the left child exists and has a higher priority than the current node, update the largest index
    if (left < this.piles.length && this.piles[left] > this.piles[largest]) {
      largest = left;
    }
    // If the right child exists and has a higher priority than the current node (or the left child if it was the largest), update the largest index
    if (right < this.piles.length && this.piles[right] > this.piles[largest]) {
      largest = right;
    }
    // If the largest index is not the current index, swap the current node with the largest child and continue heapifying
    if (largest !== index) {
      [this.piles[index], this.piles[largest]] = [
        this.piles[largest],
        this.piles[index],
      ];
      this.heapify(largest);
    }
  }

  insert(item: number) {
    // Add the new item to the end of the piles array
    this.piles.push(item);
    // Find the index of the newly added item
    let index = this.piles.length - 1;
    // While the item is not at the root and has a higher priority than its parent
    while (
      index > 0 &&
      this.piles[index] > this.piles[Math.floor((index - 1) / 2)]
    ) {
      // Swap the item with its parent
      [this.piles[index], this.piles[Math.floor((index - 1) / 2)]] = [
        this.piles[Math.floor((index - 1) / 2)],
        this.piles[index],
      ];
      // Update the index to the position of the swapped item
      index = Math.floor((index - 1) / 2);
    }
  }

  extractMax(): number | undefined {
    // If the heap is empty, return undefined
    if (this.piles.length === 0) return undefined;
    // Save the root value to return later
    const max = this.piles[0];
    // Replace the root with the last item in the heap
    this.piles[0] = this.piles[this.piles.length - 1];
    // Remove the last item from the heap
    this.piles.pop();
    // Reheapify the heap
    this.heapify(0);
    // Return the max value
    return max;
  }

  sum(): number {
    return this.piles.reduce((a, b) => a + b, 0);
  }
}
