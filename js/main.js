console.log("Connected and ready to play!");

// Selection of necessary elements from DOM
const cells = document.querySelectorAll(".cell");
const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const gameMessage = document.querySelector(".game-message");
const scoreXDisplay = document.querySelector(".score-x");
const scoreODisplay = document.querySelector(".score-o");
const scoreDrawDisplay = document.querySelector(".score-draw");
// Debugging logs for querySelectors
// console.log('We have access to Cells', cells);
// console.log('We have access to start-button', startButton);
// console.log('We have access to reset-button', resetButton);
// console.log('We have access to score', scoreDisplay);
// console.log('We have access to game-message', gameMessage);

// Declaring players

let playerOne;
let playerTwo;

// Set start and reset button active or not
let activeButton = false;

// Reset the game to zero
function resetBoard() {
  gameResult = null;
  gameActive = false;
  playerOne = null;
  playerTwo = null;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  gameMessage.textContent = "Press Start to play again!";
}

// Update the board and check for win/draw
function updateBoard(clickedCellIndex) {
  console.log("updateBoard called with index:", clickedCellIndex);
  if (board[clickedCellIndex] === "") {
    game.board[clickedCellIndex] = game.players[game.activePlayerIndex].symbol;
    game.gameResult = game.determineResult();
    console.log("updateBoard Game Result", game.gameResult);
  }
}

// Keep score display updated for both players
function updateScoreDisplay(winner) {
  if (winner === "Player X") {
    scoreXDisplay.textContent = `X: ${game.players[0].score}`;
  } else if (winner === "Player O") {
  scoreODisplay.textContent = `O: ${game.players[1].score}`;
  }
  scoreDrawDisplay.textContent = `Draw: ${game.drawScore}`;
  console.log("After Update - Player X Score:", game.players[0].score);
  console.log("After Update - Player O Score:", game.players[1].score);
}



// Update game message
function updateGameMessage(message) {
  gameMessage.textContent = message;
}

// Manage game state based on outcome(update scores, displaying messages)
function gameOutcome(result) {
  let winner = null;

  if (result === "X") {
    winner = "Player X";
    game.players[0].score++;
  } else if (result === "O") {
    winner = "Player O";
    game.players[1].score++;
  } else if (result === "draw") {
    updateGameMessage(`It's a draw! Try again.`);
  }
  if (winner) {
    updateGameMessage(`${winner} wins!`);
    updateScoreDisplay(winner);
  }
  game.gameActive = false;
}

// Start game and create players
startButton.addEventListener("click", () => {
  if (!activeButton) {
    console.log("Congrats, you have pressed Start");
    playerOne = new Player("X");
    playerTwo = new Player("O");
    console.log("Player X Ready");
    console.log("Player O Ready");
    game.startGame(playerOne, playerTwo);
    activeButton = true;
    startButton.disabled = true;
    resetButton.disabled = false;
    startButton.classList.add("button-disabled");
  }
});

// Reset the game once button pressed
resetButton.addEventListener("click", () => {
  resetBoard();
  activeButton = false;
  startButton.disabled = false;
  startButton.classList.remove("button-disabled");
  resetButton.disabled = false;
});

/** Cell click event listener
 * Handles click event for each cell on the board and player interaction
 * Had to create a loop as cells is targeting all
 * the elements with the same class on the html side.
 * Using template literal to get index of each cell block
 * in the log output
 */
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    console.log(`Congrats, you have pressed cell number ${index}`);
    if (game.gameActive && game.board[index] === "") {
      const activePlayer = game.players[game.activePlayerIndex]; //Checking if game is active and cells empty
      cell.textContent = activePlayer.symbol;
      game.updateBoard(index); // Update board with player symbol on the clicked cell
      console.log("updateBoard Cell Clicked", game.board);
      const result = game.gameResult;
      if (result) {
        console.log(`The winner is: ${result}`);
        gameOutcome(result);
      } else {
        game.switchActivePlayer();
        const nextPlayer = game.players[game.activePlayerIndex];
        gameMessage.textContent = `Player ${nextPlayer.symbol}'s turn`;
      }
    }
  });
});

// Represent the player and defines it with symbol and score
class Player {
  constructor(symbol) {
    this.symbol = symbol;
    this.score = 0;
  }
}

// Manage the game logic (player turn, outcome, board state)
class Game {
  constructor() {
    this.players = [];
    this.activePlayerIndex = 0;
    this.board = ["", "", "", "", "", "", "", "", ""]; // Represents the 9 empty cells of the board
    this.gameActive = false; // Prevent anyone from playing until the game has started
    this.gameResult = null;
    this.playersCreated = false;
    this.drawScore = 0;
  }

  // Method to start game
  startGame(playerOne, playerTwo) {
    console.log("startGame Method Activated");

    gameMessage.textContent = "Game started. Player X's turn.";
    if (this.playersCreated === false) {
      this.players.push(playerOne, playerTwo);
      this.playersCreated = true;
      console.log("Created", this.players);
    }

    // Reset game state
    this.activePlayerIndex = 0;
    this.board.fill("");
    this.gameResult = null;
    this.gameActive = true;
  }

  // Method to switch between players
  switchActivePlayer() {
    console.log("switchActivePlayer Method Activated");

    if (this.activePlayerIndex === 0) {
      this.activePlayerIndex = 1;
    } else {
      this.activePlayerIndex = 0;
      console.log("Active player index is", this.activePlayerIndex);
    }
  }

  // Method to determine results
  determineResult() {
    console.log("determineResult Method Activated");

    /** Solution
     * Contains the solution to win the game using rows, columns or diagonals.
     * Determined cell location by using the log located in cells eventlistener.
     */
    const listOfSolutions = [
      //Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      //Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      //Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < listOfSolutions.length; i++) { // Loop through each solution

      const solution = listOfSolutions[i]; // Get the current solution
      const a = solution[0]; // Extract indexes for a, b, c from current solution
      const b = solution[1];
      const c = solution[2];
      console.log(`check ${a}, ${b}, ${c} for win`);

      if (
        // Checks if symbol placement is the same across  a, b and c
        this.board[a] && //Checks if not empty
        this.board[a] === this.board[b] && this.board[a] === this.board[c] //Checks that a and b are equal and that b and c are equal
      ) {
        console.log("solution", a, b, c);

        return this.board[a]; // If they are the same, return winning symbol
      }
    }

    // Need to check for draw
    let draw = true;
    this.board.forEach((cell) => {
      if (cell === "") {
        draw = false;
      }
    });

    if (draw) {
      return "draw";
    }

    // Game still on going
    return null;
  }

  // Method to update board and check for win/tie
  updateBoard(clickedCellIndex) {
    console.log("updateBoard Method Activated");

    this.board[clickedCellIndex] = this.players[this.activePlayerIndex].symbol;

    this.gameResult = this.determineResult();

    if (this.gameResult === "draw") {
      this.drawScore++; 
      updateScoreDisplay(); 
    }
  }
}

// Initialize instance
const game = new Game();

/** Resources Used
 * Checked differences between each one and decided on textContent as according got MDN,
 * innerHTML could become an attack vector on the site and creating a potential risk.
 * textContent: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 * innerHTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
 *
 */
