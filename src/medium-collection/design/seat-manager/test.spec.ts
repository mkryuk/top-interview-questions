import { SeatManager } from "./solution";

describe("Seat Reservation Manager:", () => {
  it("SeatManager should pass example 1", () => {
    const seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
    expect(seatManager.reserve()).toEqual(1); // All seats are available, so return the lowest numbered seat, which is 1.
    expect(seatManager.reserve()).toEqual(2); // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
    seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
    expect(seatManager.reserve()).toEqual(2); // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
    expect(seatManager.reserve()).toEqual(3); // The available seats are [3,4,5], so return the lowest of them, which is 3.
    expect(seatManager.reserve()).toEqual(4); // The available seats are [4,5], so return the lowest of them, which is 4.
    expect(seatManager.reserve()).toEqual(5); // The only available seat is seat 5, so return 5.
    seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].
  });
});
