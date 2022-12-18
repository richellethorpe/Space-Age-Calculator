
import Haiku from "../src/haiku";

describe ("Haiku", () => {
  test("should correctly return a haiku object with a poem", () => {
    const newHaiku = new Haiku("There is the old pond! \n Lo, into it jumps a frog \n hark, water's music!")
    expect(newHaiku.poem).toEqual("There is the old pond! \n Lo, into it jumps a frog \n hark, water's music!");
  })

  test("should correctly determine how many lines the haiku has", () => {
    const poem ="There is the old pond! \n Lo, into it jumps a frog \n hark, water's music!";
    const newHaiku = new Haiku(poem)
    expect(newHaiku.countLines(poem)).toEqual(3);
  })
})