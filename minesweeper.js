const testBoard = [
	[" ", " ", " "],
	[" ", " ", " "],
	[" ", " ", " "]
];

const printBoard = board =>{
    console.log("Current Board: ");
    printBoard(board[0].join(' | '));
	printBoard(board[1].join(' | '));
	printBoard(board[2].join(' | '));

};

printBoard(testBoard);
testBoard[0][1] = "1";
testBoard[1][0] = "B";

printBoard(testBoard);
