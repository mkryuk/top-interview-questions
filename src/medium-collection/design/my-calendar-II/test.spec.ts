import { MyCalendarTwo } from "./solution";

describe("My Calendar II", () => {
  it("MyCalendarTwo should pass test 1", () => {
    const myCalendarTwo = new MyCalendarTwo();
    // the event can be booked.
    expect(myCalendarTwo.book(10, 20)).toBeTrue();
    // the event can be booked.
    expect(myCalendarTwo.book(50, 60)).toBeTrue();
    // the event can be double booked.
    expect(myCalendarTwo.book(10, 40)).toBeTrue();
    // the event cannot be booked,
    // because it would result in a triple booking.
    expect(myCalendarTwo.book(5, 15)).toBeFalse();
    // the event can be booked,
    // as it does not use time 10 which is already double booked.
    expect(myCalendarTwo.book(5, 10)).toBeTrue();
    // the event can be booked,
    // as the time in [25, 40) will be double booked with the third event,
    // the time [40, 50) will be single booked,
    // and the time [50, 55) will be double booked with the second event.
    expect(myCalendarTwo.book(25, 55)).toBeTrue();
  });

  it("MyCalendarTwo should pass test 1", () => {
    const myCalendarTwo = new MyCalendarTwo();
    expect(myCalendarTwo.book(24, 40)).toBeTrue();
    expect(myCalendarTwo.book(43, 50)).toBeTrue();
    expect(myCalendarTwo.book(27, 43)).toBeTrue();
    expect(myCalendarTwo.book(5, 21)).toBeTrue();
    expect(myCalendarTwo.book(30, 40)).toBeFalse();
    expect(myCalendarTwo.book(14, 29)).toBeFalse();
    expect(myCalendarTwo.book(3, 19)).toBeTrue();
    expect(myCalendarTwo.book(3, 14)).toBeFalse();
    expect(myCalendarTwo.book(25, 39)).toBeFalse();
    expect(myCalendarTwo.book(6, 19)).toBeFalse();
  });
});
