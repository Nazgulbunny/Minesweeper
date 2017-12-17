/*const testBoard = [
	[" ", " ", " "],
	[" ", " ", " "],
	[" ", " ", " "]
];

const printBoard = board =>{
    console.log("Current Board: ");
    console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));

};

printBoard(testBoard);
testBoard[0][1] = "1";
testBoard[1][0] = "B";

printBoard(testBoard);*/

const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
let board = [];
for (var i = 0; i < numberOfRows; i++) {
	let row = [];
	for (var j = 0; j < numberOfColumns; j++) {
	row.push(" ");
	}
	board.push(row);
}

return(board);
};


consolle.log(generatePlayerBoard(5,5));