import SudokuCube from './../src/sudoku.js';


describe ("SudokuCube", () => {
  test("should correctly create an threeby3 object with 9 box values", () =>{
    const sudokuCube = new SudokuCube(1, 2, 3, 4, 5, 6, 7, 8, 9);
    expect(sudokuCube.box1).toEqual(1);
    expect(sudokuCube.box2).toEqual(2);
    expect(sudokuCube.box3).toEqual(3);
    expect(sudokuCube.box4).toEqual(4);
    expect(sudokuCube.box5).toEqual(5);
    expect(sudokuCube.box6).toEqual(6);
    expect(sudokuCube.box7).toEqual(7);
    expect(sudokuCube.box8).toEqual(8);
    expect(sudokuCube.box9).toEqual(9);
  })

  test("should correctly create a new array with all the object values", () => {
    const newCube = new SudokuCube(1, 2, 3, 4, 5, 6, 7, 8, 9);
    expect(newCube.createArray()).toEqual([ 1,2,3,4,5,6,7,8,9 ])
  })

  test("should return an error statement if there is a duplicate value in the array", () => {
    const newCube = new SudokuCube(1, 2, 3, 4, 7, 6, 7, 8, 9);
    newCube.createArray();
    expect(newCube.findDuplicates(newCube.arrayOfValues)).toEqual("Not a valid sudoku input")
  })
})


