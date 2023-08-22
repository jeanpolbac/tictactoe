# Tic Tac Toe Game

Welcome to the Tic Tac Toe game! It is a browser-based implementation of the classic Tic Tac Toe game. This game represents my first JavaScript project which is an exciting milestone.  I hope you enjoy playing as much as I loved figuring out how to make it work! 

If you don't want to read what is below and just want to jump straight into the action, look no further!

[Play Tic Tac Toe](https://jeanpolbac.github.io/tictactoe/)

## Table of Contents

- [User Stories](#user-stories)
- [Technologies Used](#technologies-used)
- [Wireframe](#wireframe)
- [Screenshots](#screenshots)
- [Development Process](#development-process)
- [Hurdles & Wins](#hurdles--wins)
- [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)
- [Resources](#resources)
- [Thank you!](#thank-you)

## [User Stories](#user-stories)
- As a user, I can start a new Tic Tac Toe game.
- As a user, I can click on a square to add "X" first and then "O", taking turns.
- As a user, I am shown a message after each turn indicating if I win, lose, tie, or whose turn is next.
- As a user, I cannot click the same square twice.
- As a user, I am shown a message when I win, lose, or tie the game.
- As a user, I cannot continue playing once the game ends (win, lose, or tie).
- As a user, I can play the game again without needing to refresh the page.



## [Technologies Used](#technologies-used)
- HTML
- CSS
- JavaScript
- Git
- Trello (Project Management)

## [Wireframe](#wireframe)
<img src="images\wireframe.png" style=" width:600px ; height:auto ">

[Screenshots](#screenshots)
### MAIN GAME
<img src="images\main-game.png" style=" width:600px ; height:auto ">

### GAME STARTED
<img src="images\game-started.png" style=" width:600px ; height:auto ">

### PLAYER WINS
<img src="images\player-wins.png" style=" width:600px ; height:auto ">

### DRAW
<img src="images\game-draw.png" style=" width:600px ; height:auto ">

## [Development Process](#development-process)

Throughout this project I faced many hurdles which became wins in the end. A lot of head scratching and long deep conversations with my Rubber Ducky were absolutely essential.

#### Foundation
- Created separate HTML, CSS and JavaScript files.
- Linked the files together.
- Broke tasks to be completed down into small tasks.  I placed those tasks in Trello.  This helped me keep track of my progress.  It was overwhelming at first but became satisfying when I started to move the tasks through completion.

#### Groundwork
- Flex: The Tic Tac Toe board was initially created using only flex. This was not giving me the results I wanted. The board and cells were hard to align.  What ended up providing the right balance looking for was using grid for the `.board` and flex for the `.cell`.  This made it simple to place and align the board and cells where I wanted them.
- At this point, I realized I was not a big fan of the initial wireframe.  Changes were made to the score placement, reset and start buttons as well as the addition of a dedicated for the game messages.

#### Educating the Game
- Once I was happy with the basic look achieved by combining HTML and CSS, it was time to educate my dear main.js on what it was going to do.
- The first thing I did was create blueprint using comments of how I saw the organization of the code to be.  What classes to create, eventlisteners to add, etc... This was extremely helpful in keeping track of the end goal.
- Created the Player to represent the players and their assigned symbols. Used our dear friend the constructor to initialize the player instances. 
- Created the Game Class that would manage the game logic, including players, the board and game state. Created many methods to handle the game initialization, player turns and win/draw detection.
- Added eventlisteners to my Start and Reset button

## [Hurdles & Wins](#hurdles--wins)
#### Game Logic: 
Coming up with the logic on what decided what was a winner  or a draw was not easy. I had to make sure I was taking into account the solutions using rows, columns and diagonals. To address that, I implemented `determineResult` method. This method goes through a list of predefined solutions and checks the the player symbols in those cells matched. I was able to identify the cell index for each solution by using console.log to capture the value of each individual cell. This allowed me to refine my solution and ensure accurate results.

#### Active Player Switching
Keeping track of who was actively playing and then switching to the next player was challenging. To address that, I implemented the `switchActivePlayer` method. With this method I was able track of the players by using their index. This way, the game knew whose turn it was and ensured the correct symbol was placed in the selected cell.

#### Organization and Documenting
As someone who enjoys having things organized, this project tested my sanity. I learnt to organize my code without impacting the application functionality. At one point during the project I had a comment per line in my main.js file.  It proved to be an overwhelming experience as it was hard to read and understand which defeated the purpose. Thanks to the advice I received from one of my instructors, I went ahead and reduced the amount of comments. As a result, I was able to find a balance between detail and readability. I learnt the value of effective code organization and documentation.  

#### Responsive Design and Functionality - Work in Progress
Ensuring the game looks and functions great on multiple browsers, devices is very challenging. Due to the time constraints faced, I focused my attention on the functionality first to make sure the game was working.  I intend to go back and focus on the design at some point 

#### Underestimate README Creation
While I knew a README would have to be created at some point. I never expected to require so much time to properly capture my journey throughout this project. Going forward I will make sure to document any win/challenge/ah ha moment in detail. This was a learning experience that I will not forget.

## [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)

### MVP Bronze: &check;
- Player is able to start a new Tic Tac Toe game.  
- Player is able to click on a square to add X first and then O.
- Game displays a message after each turn to the player that shows if there is a win, draw or who's turn is next.
- Player is not able to click on the same square twice.
- Player is not able to continue playing once the game results in a win or draw.
- Player is able play the game again without refreshing the page.

### MVP Silver:
- Keep track of multiple game rounds with a win counter. &check;
- Allow them to switch to dark mode.
- Allow players to customize their tokens (X, O, name, picture, etc)
- Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Add sound feedback when placing token on the board

### MVP Gold:
- Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services.

## [Resources](#resources)
- [Grid Garden - Game](https://codepip.com/games/grid-garden/): A game for learning CSS Grid
- [Google Fonts](https://googlefonts.com/): Fonts Audiowide and Finger Paint.
- [GitHub Repository](https://github.com/yourusername/your-tic-tac-toe-repo): Source code repository for this project.
- [Kevin Powell -YouTube](https://www.youtube.com/@KevinPowell): CSS videos
- [MDN Web Docs](https://developer.mozilla.org/): Comprehensive documentation for web technologies.
    - Add Event Listeners
        - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    - Classes and Constructor
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
    - Loops and Iterations
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
    - If...Else
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
    - Array
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    - Let
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
    - Template Literals
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    - Logical Operators
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
    - Comparison Operators
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators
    - CSS - Grids
        - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids
    - CSS - Flex
        - https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
    - CSS - Backdrop-Filter
        - https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
    - CSS - Opacity
        - https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
    - CSS - RGBA
        - https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgba
 
- [stackoverflow](https://stackoverflow.com/): Question and answer website for programmers
    - https://stackoverflow.com/questions/67005252/tic-tac-toe-how-can-i-reset-the-game
    - https://stackoverflow.com/questions/46854093/switch-players-in-a-java-game

- [f/exipl/e](https://flexiple.com/javascript/disable-button-javascript/): How to disable buttons once they are pressed.

- [UnSplash](https://unsplash.com/): The internet’s source for visuals.
    - https://unsplash.com/photos/zA7I5BtFbvw (Background Image)

- [w3schools](https://www.w3schools.io/file/github-readme-image/#google_vignette): How to add images to GitHub README


## [Thank you!](#thank-you)


### Leonardo Rodriguez, Suresh Sigera, and Dhrubo Chowdhury, your clear explanations, insightful examples, commitment to best practices, and composed guidance have been invaluable throughout this project. Your mentorship has played an important role in shaping my understanding and skills, and I am grateful for your patience, support and expertise.


### Kerry Basham. Software development can be consuming and your guidance helped me maintain balance and clarity. This not only enhanced my experience while working on this project, but also shape my approach in future projects. Thank you!

### My classmates have been instrumental in maintaining a positive attitude and are continuously sharing game tutorials (for example grid, flex), best practices, etc...  

### My wife and daughter are an endless source of inspiration. Their constant support has been a driving force behind my progress, motivating me to overcome challenges and embrace new opportunities.

