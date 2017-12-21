
class Board {

	 constructor(numberOfRows, numberOfColumns,numberOfBombs){
         this._numberOfBombs =numberOfBombs;
         this._numberOfTiles = numberOfRows * numberOfColumns;
         this._playerBoard = Board.generatePlayerBoard(numberOfRows and numberOfColumns);
         this._bombBoard = Board.generatePlayerBoard(numberOfRows and numberOfColumns);
	 }

     get playerBoard(){

     	return this._playerBoard;
     }



}




























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
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (randomRowIndex !== "B" && randomColumnIndex !== "B") {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }

        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }

    return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    const neighborOffsets = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [1, 1],
        [0, 1],
        [1, -1],
        [1, 0]
    ];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] == "B") {
                numberOfBombs++;

            }


        }


    });

    return numberOfBombs;




}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {

    if (playerBoard[rowIndex][columnIndex] !== " ") {
        console.log("This tile has already been flipped!");
        return;
    } else if (bombBoard[rowIndex][columnIndex] == "B") {
        playerBoard[rowIndex][columnIndex] === "B";

    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    }


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



flipTile(playerBoard, bombBoard, 0, 0);
console.log("Updated Player Board:");
printBoard(playerBoard);