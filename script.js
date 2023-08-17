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

// Add startButton Event Listener
startButton.addEventListener("click", () => {
  // console.log("Congrats, you have pressed Start");
  playerOne = new Player("X");
  playerTwo = new Player("O");

  console.log("Player X Ready");
  console.log("Player O Ready");

  /** Need to complete a display message on gameMessage
   * that the game started and current player symbol
   */

  /** Need  to make sure all cells are empty */

  /** Need to start the game */
});

// Add resetButton Event Listener
resetButton.addEventListener("click", () => {
  // console.log("Congrats, you have pressed Reset");
  //add line to reset gameboard

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
    // console.log(`Congrats, you have pressed a Cell ${index}`);
    //Need to check if game is active and cells are empty
    //Need to update board with symbol placement
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
    // Need to initialize properties
  }
}

// Need to update board and determine if player won, lost or draw

// Need to switch player turn

// Add necessary instances
const game = new Game(); // Create an instance of the TicTacToeGame class
