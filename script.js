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

// startButton Event Listener
startButton.addEventListener("click", () => {
  // console.log("Congrats, you have pressed Start");
  // This is not complete. Just setting up the placeholder.
});

// resetButton Event Listener
resetButton.addEventListener("click", () => {
  // console.log("Congrats, you have pressed Reset");
  // This is not complete. Just setting up the placeholder.
});

/** cells Event Listener
 * Had to create a loop as cells is targetting all
 * the elements with the same class on the html side.
 * Using template literal to get index of each cell block
 * in the log output
 */
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    // console.log(`Congrats, you have pressed a Cell ${index}`);
    // This is not complete. Just setting up the placeholder.
  });
});

/** Player Class
 * Player class uses the parameter Symbol to
 * represents X or O for each player.
 * Players will be added later on.
 */
class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
}

/** Game Class
 * Not started but will contain logic on how
 * the game works.
 */
class Game {
  // This is not complete. Just setting up the placeholder.
}

// Add necessary instances
