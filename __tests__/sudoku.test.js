import {Cube, Game} from "../src/sudoku.js";

describe('Cube', () => {

  let newSudokuCube; 

  beforeEach(() => {
    newSudokuCube = new Cube(0,1,2,3,4,5,6,7,8);
  });

  test('should correctly create a Sudoku Cube object with nine values', () => {
    expect(newSudokuCube.space0).toEqual(0);
    expect(newSudokuCube.space1).toEqual(1);
    expect(newSudokuCube.space2).toEqual(2);
    expect(newSudokuCube.space3).toEqual(3);
    expect(newSudokuCube.space4).toEqual(4);
    expect(newSudokuCube.space5).toEqual(5);
    expect(newSudokuCube.space6).toEqual(6);
    expect(newSudokuCube.space7).toEqual(7);
    expect(newSudokuCube.space8).toEqual(8);
    
  });

  test('it should return true if all values are unique', () => {
    expect(newSudokuCube.checkDuplicates()).toEqual(true);
  });

  test('it should return false if all values are not unique', () => {
    newSudokuCube.space4 = 3;
    expect(newSudokuCube.checkDuplicates()).toEqual(false);
  })

 });

 describe ('Game', () => {
  
  test('should correctly create a Sudoku Game object with nine cube arrays', () => {
  // let game = new Game([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,19]);
  
  expect(game.cube0).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube1).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube2).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube3).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube4).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube5).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube6).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube7).toEqual([1,2,3,4,5,6,7,8,9]);
  expect(game.cube8).toEqual([1,2,3,4,5,6,7,8,19]);
  })
 });