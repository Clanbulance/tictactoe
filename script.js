//Building blocks
// gameCreation
// Gamecontroller saves functions needed for gameflow
// GameFlow
// playercreation

// nest step is to create a function onclick to start the gameplay
// we will start as player X and can later ask the player to chose which mark he wants.

const createPLayer = (playerName, playerNumber,symbol) => {
    return {user: playerName, ID: playerNumber, mark: symbol}
};

const player1 = createPLayer("player",1,"X")
const player2 = createPLayer("player",2,"O")

const gameCreation = (function(){

    const gameBoard = 
    [["","",""]
    ,["","",""]
    ,["","",""]
];
    
    const getGameBoard = () => {
        return gameBoard;
    }

    resetBoard = () => {
        document.querySelector(".popup").style.display = "none";
        document.querySelector(".gameboard").style.opacity = "100%"
        gameBoard.forEach((element) => element = " ")
    }


    const gameCells = document.querySelectorAll("div.cell"); 

    gameCells.forEach((element) => element.addEventListener('click', (e) => {
        if (e.target.innerText != "") {
            console.log("field was already filled in")
        } else if (e.target.innerText == "") {
            e.target.innerText = getCurrentMove().toUpperCase();
            console.log(`${getCurrentMove()} placed on row:${e.target.dataset.row} col:${e.target.dataset.col}`);
            gameBoard[e.target.dataset.row][e.target.dataset.col] = getCurrentMove().toUpperCase().toString();
            const winner = checkForWin();
            if (winner){
                console.log(`Player ${winner} wins!`)
                document.querySelector(".popup").style.display = "flex";
                document.querySelector(".gameboard").style.opacity = "30%";
                document.querySelector(".Winner").innerText = `${winner} Has won the game`
            } else {
                console.log("No winner yet, swapping players")
                playerSwap()
            }
           
            
        }

    }))

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

   

    

    function checkForWin() {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== "") {
                return gameBoard[i][0]; // Returns the winning symbol
                console.log("chickenwinner")
            }
        }
    
        // Check columns
        for (let j = 0; j < 3; j++) {
            if (gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j] && gameBoard[0][j] !== "") {
                return gameBoard[0][j]; // Returns the winning symbol
            }
        }
    
        // Check diagonals
        if ((gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) ||
            (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0])) {
            if (gameBoard[1][1] !== "") {
               return gameBoard[1][1]; // Returns the winning symbol
            }
        } 
    
        return null; // Return null if no winner
    }


    return{playerSwap,getCurrentMove,getGameBoard,checkForWin};
})();



const newGame = gameCreation;




// const checkForWin = () => {
// if all of checkforwin array 1 === playermark playermark win
//if all of checkforwin array 2 === playermark playermark win
//if all of checkforwin array 3 === playermark playermark win
//if checkforwin[0]0 and 1 0 and 2 0 == playermark playermark wins
//
//
//
//
//
//