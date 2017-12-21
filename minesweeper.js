
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

    flipTile(rowIndex, columnIndex){

	    if (this._playerBoard[rowIndex][columnIndex] !== " ") {
	        console.log("This tile has already been flipped!");
	        return;
	    } else if (this._bombBoard[rowIndex][columnIndex] == "B") {
	        this._playerBoard[rowIndex][columnIndex] === "B";

	    } else {
	        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
	    }

	    this._numberOfTiles--;
	}

	getNumberOfNeighborBombs(rowIndex, columnIndex){
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
	    this._numberOfRows = this._bombBoard.length;
	    this._umberOfColumns = this._bombBoard[0].length;
	    this._numberOfBombs = 0;
	    neighborOffsets.forEach(offset => {
	        const neighborRowIndex = rowIndex + offset[0];
	        const neighborColumnIndex = columnIndex + offset[1];
	        if (neighborRowIndex >= 0 && neighborRowIndex < this._numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < this._numberOfColumns) {
	            if (this._bombBoard[neighborRowIndex][neighborColumnIndex] == "B") {
	                this._numberOfBombs++;

	            }


	        }


	    });

	    return this._numberOfBombs;
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