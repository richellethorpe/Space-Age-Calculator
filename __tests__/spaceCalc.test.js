

import SpaceCalc from "../src/spaceCalc";

describe ("SpaceCalc", () => {
  test("should correctly return a space calc object with one age value in earth years", () => {
    const newSpaceCalc = new SpaceCalc(36);
    expect(newSpaceCalc.earthAge).toEqual(36);
  })
})