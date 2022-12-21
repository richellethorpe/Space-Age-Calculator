import Sudoku from "../src/sudoku.js";

describe('Sudoku', () => {
  let newSudoku; 
  beforeEach(() => {
    newSudoku = new Sudoku(1,2,3,4,5,6,7,8,9);
  });
  test('should correctly create a Sudoku object with nine values', () => {
    expect(newSudoku.space1).toEqual(1);
    expect(newSudoku.space2).toEqual(2)
    expect(newSudoku.space3).toEqual(3);
    expect(newSudoku.space4).toEqual(4);
    expect(newSudoku.space5).toEqual(5);
    expect(newSudoku.space6).toEqual(6);
    expect(newSudoku.space7).toEqual(7);
    expect(newSudoku.space8).toEqual(8);
    expect(newSudoku.space9).toEqual(9);
  });

  test('it should return true if all values are unique', () => {
    expect(newSudoku.checkDuplicates()).toEqual(true)
  });
 });