
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

  // test("should count one syllable per word for a single line", () => {
  //   const newHaiku = new Haiku("Blow air from the west","Fallen leaves gather","In the east");
  //   expect(newHaiku.syllableCounter("Blow air from the west")).toEqual(5);
  // })

  test("should count one syllable per vowel for a single line", () => {
    const newHaiku = new Haiku("Blowing from the west");
    expect(newHaiku.syllableCounter("Blowing from the west")).toEqual(5);  
  })  

  test("should count any word that is 3 letters or less as one syllable", () => {
    const newHaiku = new Haiku("Blowing aaa eee west");
    expect(newHaiku.syllableCounter("Blowing aaa eee west")).toEqual(5);  
  })  
  test("should not count an e as a syllable if it's at the end of a word", () => {
    const newHaiku = new Haiku();
    expect(newHaiku.sliceE("Blowinge frome the weste")).toEqual("Blowing from th west");  
  })  

  test("should only count one syllable if two vowels are next to one another in a sentace", () => {
    const newHaiku = new Haiku();
    expect(newHaiku.syllableCounter("Thou art oats in a meal")).toEqual(6);  
  })  

})
