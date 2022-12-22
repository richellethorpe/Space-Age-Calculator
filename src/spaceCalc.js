export default class SpaceCalc {
  constructor(age, yearsPast, futureAge){
    this.earthAge = age;
    this.yearsPast = yearsPast;
    this.futureAge = futureAge;
    this.mercuryAge =0;
    this.venusAge = 0;
    this.marsAge =0;
    this.jupiterAge = 0;
  }
  findMercuryAge(){
    this.mercuryAge = parseInt(this.earthAge / .24);
  }

  findVenusAge(){
    this.venusAge = parseInt(this.earthAge / .62);
  }

  findMarsAge(){
    this.marsAge = parseInt(this.earthAge / 1.88);
  }
  findJupiterAge(){
    this.jupiterAge = parseInt(this.earthAge / 11.86);
  }

  findYearsPast() {
    let yearsAgo = this.yearsPast;
    let pastEarthAge = this.earthAge - this.yearsPast;
    let pastMercuryAge = parseInt((this.earthAge - this.yearsPast) / .24);
    let pastVenusAge = parseInt((this.earthAge - this.yearsPast) / .62);
    let pastMarsAge = parseInt((this.earthAge - this.yearsPast) / 1.88);
    let pastJupiterAge = parseInt((this.earthAge - this.yearsPast) / 11.86);
    let pastAgeResponse = `${yearsAgo} years ago you would be the following ages on these planets. Earth: ${pastEarthAge} years old, Mercury: ${pastMercuryAge} years old, Venus: ${pastVenusAge} years old, Mars: ${pastMarsAge} years old, Jupiter: ${pastJupiterAge} years old`;
    return pastAgeResponse;

  }
}

