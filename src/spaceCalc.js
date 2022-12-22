export default class SpaceCalc {
  constructor(age){
    this.earthAge = age;
    this.mercuryAge =0;
  }


  findMercuryAge(){
    this.mercuryAge = this.earthAge / .24;

  }
}

