/*const testBoard = [
	[" ", " ", " "],
	[" ", " ", " "],
	[" ", " ", " "]
];
*/
const printBoard = board =>{
	console.log(board.map(row => row.join(' | ')).join('\n'));
    

};

/*
printBoard(testBoard);
testBoard[0][1] = "1";
testBoard[1][0] = "B";

printBoard(testBoard);*/

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const board = [];
    for (i = 0; i < numberOfRows; i++) {
        const row = [];
        for (j = 0; j < numberOfColumns; j++) {
            row.push(" ");
        }
        board.push(row);
    }
    return board;
};





const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

    const board = [];
    for (var i = 0; i < numberOfRows; i++) {
        const row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(null);
        }
        board.push(row);
    }
    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        //The code in this while loop has the potential to place bombs on top of already existing bombs. This will be fixed later withcontrol flow.
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfRows);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }

    return board;

};


var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ')
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);