import { Router } from "./solution";

describe("3508. Implement Router", () => {
  it("Router should pass test 1", () => {
    const router = new Router(3); // Initialize Router with memoryLimit of 3.
    expect(router.addPacket(1, 4, 90)).toBeTrue(); // Packet is added. Return True.
    expect(router.addPacket(2, 5, 90)).toBeTrue(); // Packet is added. Return True.
    expect(router.addPacket(1, 4, 90)).toBeFalse(); // This is a duplicate packet. Return False.
    expect(router.addPacket(3, 5, 95)).toBeTrue(); // Packet is added. Return True
    expect(router.addPacket(4, 5, 105)).toBeTrue(); // Packet is added, [1, 4, 90] is removed as number of packets exceeds memoryLimit. Return True.
    expect(router.forwardPacket()).toEqual([2, 5, 90]); // Return [2, 5, 90] and remove it from router.
    expect(router.addPacket(5, 2, 110)).toBeTrue(); // Packet is added. Return True.
    expect(router.getCount(5, 100, 110)).toEqual(1); // The only packet with destination 5 and timestamp in the inclusive range [100, 110] is [4, 5, 105]. Return 1.
  });

  it("Router should pass test 1", () => {
    const router = new Router(2); // Initialize Router with memoryLimit of 2.
    expect(router.addPacket(7, 4, 90)).toBeTrue(); // Return True.
    expect(router.forwardPacket()).toEqual([7, 4, 90]); // Return [7, 4, 90].
    expect(router.forwardPacket()).toEqual([]); // There are no packets left, return [].
  });
});
