const testBoard = [
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

printBoard(testBoard);
