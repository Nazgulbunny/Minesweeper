const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];

  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];

  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  var numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    // This code has the potential to place bombs on top of bombs, this will be fixed with control flow.
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 3);
var bombBoard = generateBombBoard(3, 3, 3);
console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);



