//rmt2 push

export default function SudokuCube (num1, num2, num3, num4, num5, num6, num7, num8, num9) {
  this.box1 = num1;
  this.box2 = num2;
  this.box3 = num3;
  this.box4 = num4;
  this.box5 = num5;
  this.box6 = num6;
  this.box7 = num7;
  this.box8 = num8;
  this.box9 = num9;
  this.arrayOfValues = [];
}
//let newCube = new SudokuCube (1,2,3,4,5,6,7,8,9);


SudokuCube.prototype.createArray = function () {
  this.arrayOfValues.splice(0, 8);
  let arr = Object.values(this);
  arr.pop();
  this.arrayOfValues.push(...arr);
  return this.arrayOfValues;
};


SudokuCube.prototype.findDuplicates = function (arr) {
  console.log(arr.length);
  for (let i=0; i < arr.length -1; i ++){
    for (let j = i +1; j < arr.length; j++) {
      if (arr[i] === arr[j]){
        return ("Not a valid sudoku input")
      }
    }
  }
}
// 
// newCube.createArray();
// ThreeBy3.prototype.findDuplicate = function () {
//   let valuesAlreadySeen = []
//   for (let i = 0; i < this.arrayOfValues.length; i++) {
//     let value = this.arrayOfValues[i]
//     if (valuesAlreadySeen.indexOf(value) !== -1) {
//       return true
//     }
//     valuesAlreadySeen.push(value)
//   }
//   return false
// };
