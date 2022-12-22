export default class SpaceCalc {
  constructor(age){
    this.earthAge = age;
    this.mercuryAge =0;
    this.venusAge = 0;
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
}

