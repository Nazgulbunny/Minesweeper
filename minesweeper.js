
 //Game Class
 class Game {
     constructor(numberOfRows, numberOfColumns, numberOfBombs) {

         this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
     }


     playMove(rowIndex, columnIndex) {
         this._board.flipTile(rowIndex, columnIndex);

         if (this._board.playerBoard[rowIndex][columnIndex] === "B") {
             console.log("There is a BOMB! You lost!");
             this._board.print();
         } else if (!this._board.hasSafeTiles()) {

             console.log("YOU WON! GOOD JOB!");
             this._board.print();
         } else {

             console.log("Current Board:");
             this._board.print();
         }
     }

 }




 //Board Class

 class Board {

     constructor(numberOfRows, numberOfColumns, numberOfBombs) {
         this._numberOfBombs = numberOfBombs;
         this._numberOfTiles = numberOfRows * numberOfColumns;
         this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
         this._bombBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
     }

     get playerBoard() {

         return this._playerBoard;
     }

     flipTile(rowIndex, columnIndex) {

         if (this._playerBoard[rowIndex][columnIndex] !== " ") {
             console.log("This tile has already been flipped!");
             return;
         } else if (this._bombBoard[rowIndex][columnIndex] === "B") {
             this._playerBoard[rowIndex][columnIndex] = "B";

         } else {
             this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
         }

         this._numberOfTiles--;
     }

     getNumberOfNeighborBombs(rowIndex, columnIndex) {
         const neighborOffsets = [
             [-1, -1],
             [-1, 0],
             [-1, 1],
             [0, -1],
             [0, 1],
             [1, -1],
             [1, 0],
             [1, 1]
         ];
         const numberOfRows = this._bombBoard.length;
         const numberOfColumns = this._bombBoard[0].length;

         let numberOfBombs = 0;

         neighborOffsets.forEach(offset => {
             const neighborRowIndex = rowIndex + offset[0];
             const neighborColumnIndex = columnIndex + offset[1];
             if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
                 neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                 if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                     numberOfBombs++;
                 }
             }
         });
         return numberOfBombs;
     }

     hasSafeTiles() {
         return this._numberOfTiles !== this._numberOfBombs;
     }

     print() {
         console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
     }


     static generatePlayerBoard(numberOfRows, numberOfColumns) {
         const board = [];

         for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
             const row = [];
             for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
                 row.push(' ');
             }
             board.push(row);
         }
         return board;
     }

     static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
             const randomRowIndex = Math.floor(Math.random() * numberOfRows);
             const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
             if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                 board[randomRowIndex][randomColumnIndex] = 'B';
                 numberOfBombsPlaced++;
             }
         }

         return board;
     }

 }


 const g = new Game(3, 3, 3);
 g.playMove(1, 0);






































/*var playerBoard = generatePlayerBoard(3, 3);
var bombBoard = generateBombBoard(3, 3, 3);
console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);



flipTile(playerBoard, bombBoard, 0, 0);
console.log("Updated Player Board:");
printBoard(playerBoard);*/




