//rrmt

import SpaceCalc from "../src/spaceCalc";


describe ("SpaceCalc", () => {
  let newSpaceCalc;

  beforeEach(() =>{
    newSpaceCalc = new SpaceCalc(36);
  });

  test("should correctly return a space calc object with one age value in earth years", () => {
    
    expect(newSpaceCalc.earthAge).toEqual(36);
  })

  test("should correctly return a space calc object with age value in mercury years", () => {
    newSpaceCalc.findMercuryAge();
    expect(newSpaceCalc.mercuryAge).toEqual(105);
  })
})


