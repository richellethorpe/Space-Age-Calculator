
import Haiku from "../src/haiku";
//Blowing from the west
//Fallen leaves gather
//In the east .
describe ("Haiku", () => {
  test("should correctly return a haiku object with three lines", () => {
    const newHaiku = new Haiku("Blowing from the west","Fallen leaves gather","In the east");
    expect(newHaiku.line1).toEqual("Blowing from the west");
    expect(newHaiku.line2).toEqual("Fallen leaves gather");
    expect(newHaiku.line3).toEqual("In the east");
  })

})

