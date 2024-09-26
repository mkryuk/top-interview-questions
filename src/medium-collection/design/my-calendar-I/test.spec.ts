import { MyCalendar } from "./solution";

describe("My Calendar I", () => {
  it("MyCalendar should pass test 1", () => {
    let myCalendar = new MyCalendar();
    expect(myCalendar.book(10, 20)).toBeTrue();
    // It can not be booked because time 15 is already booked by another event.
    expect(myCalendar.book(15, 25)).toBeFalse();
    // The event can be booked, as the first event takes every time less than 20, but not including 20.
    expect(myCalendar.book(20, 30)).toBeTrue();
  });
});
