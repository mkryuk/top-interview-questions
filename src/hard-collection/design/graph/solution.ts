type Edge = [number, number, number]; // [from, to, cost]

export class Graph {
  private adjacencyList: Map<number, Edge[]>;

  constructor(n: number, edges: Edge[]) {
    this.adjacencyList = new Map();

    for (let i = 0; i < n; i++) {
      this.adjacencyList.set(i, []);
    }

    edges.forEach((edge) => this.addEdge(edge));
  }

  addEdge(edge: Edge): void {
    const [from, to, cost] = edge;
    this.adjacencyList.get(from)?.push([from, to, cost]);
  }

  shortestPath(node1: number, node2: number): number {
    const distances = new Array(this.adjacencyList.size).fill(Infinity);
    distances[node1] = 0;

    const pq = new PriorityQueue<[number, number]>((a, b) => a[1] - b[1]);
    pq.enqueue([node1, 0]);

    while (!pq.isEmpty()) {
      const [node, cost] = pq.dequeue();

      if (node === node2) {
        return cost;
      }

      this.adjacencyList.get(node)?.forEach(([_, neighbor, edgeCost]) => {
        const newCost = cost + edgeCost;
        if (newCost < distances[neighbor]) {
          distances[neighbor] = newCost;
          pq.enqueue([neighbor, newCost]);
        }
      });
    }

    return distances[node2] === Infinity ? -1 : distances[node2];
  }
}

class PriorityQueue<T> {
  private data: T[];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.data = [];
    this.comparator = comparator;
  }

  enqueue(item: T): void {
    this.data.push(item);
    this.data.sort(this.comparator);
  }

  dequeue(): T {
    return this.data.shift()!;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }
}
