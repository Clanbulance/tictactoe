//Building blocks
// gameCreation
// Gamecontroller saves functions needed for gameflow
// GameFlow
// playercreation




//this function generates the gamboard at the start if the game
//IIFE = Immediatly invoked function expression 
//this will run when the script loads


const gameCreation = (function(){

    const gameBoard = 
    [   ["","",""], 
        ["","",""],
        ["","",""],
    ];

    const getGameBoard = () => {
        return gameBoard;
    }

    let gameMove = "x"

    const playerSwap = () => {
        
        if (gameMove =="x"){
            gameMove = "O"
        }
            else{gameMove = "x"}
            return gameMove;
    }

    const getCurrentMove = () => {
        return gameMove;
    };

    const changeGameBoard = (i,j,k) => {
        gameBoard[i][j] = k;
        return console.log(`${k} placed on gameBoard[${i}][${j}]`);
    }

    let winner = "";

    const checkForWin = () => {
        for (let i = 0;i <gameBoard.length;i++){
            let rowXCount = 0;
            let rowOCount = 0;
            let colXCount = 0;
            let colOCount = 0;
            let mainDiagonalXCount = 0;
            let mainDiagonalOCount = 0;
            let antiDiagonalXCount = 0;
            let antiDiagonalOCount = 0;
            for (let j = 0; j < gameBoard[i].length; j++) {
                // Check rows
                if (gameBoard[i][j] === "X") {
                    rowXCount++;
                } else if (gameBoard[i][j] === "O") {
                    rowOCount++;
                }
                // Check columns
                if (gameBoard[j][i] === "X") {
                    colXCount++;
                } else if (gameBoard[j][i] === "O") {
                    colOCount++;
                }
                // Check main diagonal
                if (i === j && gameBoard[i][j] === "X") {
                    mainDiagonalXCount++;
                } else if (i === j && gameBoard[i][j] === "O") {
                    mainDiagonalOCount++;
                }
                // Check anti-diagonal
                if (i + j === gameBoard.length - 1 && gameBoard[i][j] === "X") {
                    antiDiagonalXCount++;
                } else if (i + j === gameBoard.length - 1 && gameBoard[i][j] === "O") {
                    antiDiagonalOCount++;
                }
            }
            // Check if X or O has won in rows, columns, or diagonals
            if (rowXCount === 3 || colXCount === 3 || mainDiagonalXCount === 3 || antiDiagonalXCount === 3) {
                return winner = "x";
            } else if (rowOCount === 3 || colOCount === 3 || mainDiagonalOCount === 3 || antiDiagonalOCount === 3) {
                return winner = "y";
            } else {
                return winner = "no one"
            }
        }
        return winner;
    }

    const checkWinner = () => {
        return winner;
    }
        

    

    return{playerSwap,getCurrentMove,getGameBoard,changeGameBoard,checkForWin,checkWinner};
})();

//Factoryfunction to create players
const createPLayer = (playerName, playerNumber,symbol) => {
    return {user: playerName, ID: playerNumber, mark: symbol}
};


const newGame = gameCreation;