export class Game {
  constructor(cube0, cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8){
    this.cube0 = cube0;
    this.cube1 = cube1;
    this.cube2 = cube2;
    this.cube3 = cube3;
    this.cube4 = cube4;
    this.cube5 = cube5;
    this.cube6 = cube6;
    this.cube7 = cube7;
    this.cube8 = cube8;
  }

}
  export class Cube {
    constructor(space0, space1, space2, space3, space4, space5, space6, space7, space8) {
      this.space0 = space0;
      this.space1 = space1;
      this.space2 = space2;
      this.space3 = space3;
      this.space4 = space4;
      this.space5 = space5;
      this.space6 = space6;
      this.space7 = space7;
      this.space8 = space8;
    }
  
    checkDuplicates() {
      let arrayOfValues = Object.values(this);
      return new Set(arrayOfValues).size === arrayOfValues.length;
      };
  }
