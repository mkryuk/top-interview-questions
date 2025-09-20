export class Router {
  constructor(memoryLimit: number) {}

  addPacket(source: number, destination: number, timestamp: number): boolean {
    return false;
  }

  forwardPacket(): number[] {
    return [];
  }

  getCount(destination: number, startTime: number, endTime: number): number {
    return 0;
  }
}
