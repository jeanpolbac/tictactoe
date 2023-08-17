// Verifying connection with index.html
console.log("Connected and ready to play!");

// Selection of necessary elements from DOM
// const cells - selects all the cells
const cells = document.querySelectorAll(".cell");

// const startButton - used to connect the Start Button
const startButton = document.querySelector(".start-button");

// const resetButton - used to connect the Reset Button
const resetButton = document.querySelector(".reset-button");

// const scoreDisplay - used to display the scores for both players
const scoreDisplay = document.querySelector(".score");

// const gameMessage - used to display winner message
const gameMessage = document.querySelector(".game-message");

// Debugging logs
// console.log('We have access to Cells', cells);
// console.log('We have access to start-button', startButton);
// console.log('We have access to reset-button', resetButton);
// console.log('We have access to score', scoreDisplay);
// console.log('We have access to game-message', gameMessage);


// Declaring player variables
let playerOne;
let playerTwo;


// resetBoard Function to be used when resetting the board
function resetBoard() {
  // Need to complete.
}

// updateBoard Function - Need to complete class Game before testing it.
function updateBoard(index) {
  console.log("updateBoard called with index:", index);

  /*Checks if the cell at the selected index is empty before updating*/
  if (game.board[index] === "") {
    /** Create activePlayer variable to
     * store the index of the active player.
     */
    const activePlayer = game.players[game.activePlayerIndex];

    //Add activePlayer symbol to the index selected by the player
    game.board[index] = activePlayer.symbol;
  }
}


// Add startButton Event Listener
startButton.addEventListener("click", () => {
  console.log("Congrats, you have pressed Start");
  
  // create instances for X and O
  playerOne = new Player("X");
  playerTwo = new Player("O");

  console.log("Player X Ready");
  console.log("Player O Ready");

  /** Need to complete a display message on gameMessage
   * that the game started and active player symbol
   */

  /** Need  to make sure all cells are empty */

  /** Need to start the game */
});

// Add resetButton Event Listener
resetButton.addEventListener("click", () => {
  // console.log("Congrats, you have pressed Reset");

  // reset of both players
  playerOne = null;
  playerTwo = null;
  
  // Clear the content of each cell on the game board
  cells.forEach((cell) => {
    cell.textContent = "";
  });

  // Reset the game message
  gameMessage.textContent = "Reset Complete.";
});

/** Add cells Event Listener
 * Had to create a loop as cells is targetting all
 * the elements with the same class on the html side.
 * Using template literal to get index of each cell block
 * in the log output
 */
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    console.log(`Congrats, you have pressed a Cell ${index}`);

    //Checking if game is active and selected cell is empty
    if (game.gameActive && game.board[index] === "") {
      const activePlayer = game.players[game.activePlayerIndex];
      cell.textContent = activePlayer.symbol;
    }

    //Call function to update board with the last player move
    updateBoard(index);

    //Need to update message for each player based on win, draw, or next turn
  });
});


/** Add Player Class
 * Player class uses the parameter Symbol to
 * represents X or O for each player.
 */
class Player {
  constructor(symbol) {
    this.symbol = symbol;
    this.score = 0;
  }
}

/** Add Game Class
 * Not started but will contain logic on how
 * the game works.
 */
class Game {
  constructor() {
    // array that stores the players
    this.players = [];

    // active player index
    this.activePlayerIndex = 0;

    // array that represents the 9 cells of the board
    this.board = ["", "", "", "", "", "", "", "", ""];

    // checks if game is active
    this.gameActive = false;

    // checks if players are created
    this.playersCreated = false;
  }

  // Method to start game
  startGame(playerOne, playerTwo) {
    console.log("startGame Method Activated");
    
    // checks if players have not been created
    if (this.playersCreated === false) {
      
      // add players to the player array if the above is false
      this.players.push(playerOne, playerTwo);
      
      // confirms players are created
      this.playersCreated = true;
      console.log("Created", this.players);
    }
  }

  // Method to switch between players
  switchActivePlayer() {
    console.log("switchActivePlayer Method Activated");
    
    // checks if active player is player 0
    if (this.activePlayerIndex === 0) {
      
      // if the above is true, then change active player to 1
      this.activePlayerIndex = 1;
    } else {
      
      // if active player is not equal to 0 then change active player to 0
      this.activePlayerIndex = 0;
    }
    console.log("active player index is", this.activePlayerIndex);
  }

  // Method to determine results
  determineResult() {
    console.log("determineResult Method Activated");

    // Need to add code set the winning patterns
    // Need to check for rows, columns and diagonals
    // Need to check for draw
  }

  // Method to update board and check for win/tie
  updateBoard() {
    console.log ("updateBoard Method Activated");
    
    // Need to update board with active player symbol on selected cell
    // check for win or draw calling determineResult
  }
}


// Add necessary instances
const game = new Game(); // Create an instance of the TicTacToeGame class
