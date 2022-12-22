//rrmt

import SpaceCalc from "../src/spaceCalc";


describe ("SpaceCalc", () => {
  let newSpaceCalc;

  beforeEach(() =>{
    newSpaceCalc = new SpaceCalc(36,6);
  });

  test("should correctly return a space calc object with one age value in earth years", () => {
    
    expect(newSpaceCalc.earthAge).toEqual(36);
  })

  test("should correctly return a space calc object with age value in mercury years", () => {
    newSpaceCalc.findMercuryAge();
    expect(newSpaceCalc.mercuryAge).toEqual(150);
  })

  test("should correctly return a space calc object with age value in venus years", () => {
    newSpaceCalc.findVenusAge();
    expect(newSpaceCalc.venusAge).toEqual(58);
  })

  test("should correctly return a space calc object with age value in mars years", () => {
    newSpaceCalc.findMarsAge();
    expect(newSpaceCalc.marsAge).toEqual(19);
  })

  test("should correctly return a space calc object with age value in jupiter years", () => {
    newSpaceCalc.findJupiterAge();
    expect(newSpaceCalc.jupiterAge).toEqual(3);
  })

  test("should correctly return how many years have passed on each planet since a past birthday", () => {
    expect(newSpaceCalc.findYearsPast()).toEqual("6 years ago you would be the following ages on these planets. Earth: 30 years old, Mercury: 125 years old, Venus: 48 years old, Mars: 15 years old, Jupiter: 2 years old");
  })
})


