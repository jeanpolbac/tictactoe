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
console.log('We have access to Cells', cells);
console.log('We have access to start-button', startButton);
console.log('We have access to reset-button', resetButton);
console.log('We have access to score', scoreDisplay);
console.log('We have access to game-message', gameMessage);

// Add Event listeners


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
    //need to add rules on how the game works
}


// Add necessary instances 



// Add Event listeners