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

    const checkForWin = (gameBoard) => {
        for (let i = 0;i <gameBoard.length;i++){
            let rowXcount = 0;
            let rowOcount = 0;
            let colXcount = 0;
            let colOcount = 0;
            let mainDiagonalXCount = 0;
            let mainDiagonalOCount = 0;
            let antiDiagonalXCount = 0;
            let antiDiagonalOCount = 0;
        }

    }

    return{playerSwap,getCurrentMove,getGameBoard,changeGameBoard};
})();

//Factoryfunction to create players
const createPLayer = (playerName, playerNumber,symbol) => {
    return {user: playerName, ID: playerNumber, mark: symbol}
};


const newGame = gameCreation;