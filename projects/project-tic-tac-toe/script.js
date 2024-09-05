const gameBoard = (function() {
  let currentPlayer = 'o';

  const board = Array(9).fill('');
  const winninngCondition = [
    [0, 1,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  
  const getBoardValue = () => {
    return board;
  };

  const getWinningCondition = () => {
    return winninngCondition;
  }

  // console.log(getBoardValue())
  const startGame = () => {
    const dialog = document.getElementById('winning-notification');
    const playerTurnNotification = document.getElementById('player-turn');
    
    currentPlayer = 'o';
    HTMLHandler.resetBoardHtml(currentPlayer);
    HTMLHandler.clickSquare();

    playerTurnNotification.textContent = `${playerData.getPlayers_name().player1_name} turn`;

    dialog.close();
  };

  const newGame = (player1_score, player2_score) => {
    getForm ();
    startGame();
    const playerBoard = playerData.resetPlayerScore();
    player1_score.textContent = playerBoard.player1_score;
    player2_score.textContent = playerBoard.player2_score;
  }

  const getCurrentPlayer = () => currentPlayer;

  // player turn
  const playerTurn = () => {
    return currentPlayer === 'x' ? (currentPlayer = 'o') : (currentPlayer = 'x');
  };
  
  return {getBoardValue, startGame, playerTurn, getWinningCondition, getCurrentPlayer, newGame}
})();

const HTMLHandler = (() => {
  // Get Element Acces
  const squares = document.querySelectorAll('.square');
  const playNextRound = document.querySelector('#next-round');
  const newGameButton = document.getElementById('new-game');

  // Set data to squares
  const setSquareDataSet =  () => {
    squares.forEach((square, index) => square.setAttribute('data-id', index));
  } 
  setSquareDataSet();
  
  // setButtonOfSquare have dataset
  const setButtonOfSquareDataSet =  (currentPlayer) => {
    const squareButtons = document.querySelectorAll('.square-button');
    squareButtons.forEach((button) => {
      if (button.textContent === '') {
        button.dataset.hover = currentPlayer;
      }
    });
  } 

  
  // Click playNextRound
  playNextRound.addEventListener('click', gameBoard.startGame);

  const clickNewGame = () => {
    const player1_score = document.getElementById('player1-score');
    const player2_score = document.getElementById('player2-score');

    newGameButton.addEventListener('click', () => {
      gameBoard.newGame(player1_score, player2_score);
    });
  }
  
  // Reset Board
  const resetBoardHtml = (currentPlayer) => {
    // get board from gameBoard
    const board = gameBoard.getBoardValue();
    
    
    squares.forEach((square, index) =>  {
      // reset board array
      board.forEach((element) => {
        element = '';
        // reset square text content
        square.innerHTML = `<button class='square-button' data-hover=${currentPlayer}>${element}</buutton>`;
      });
      // reset  square dataset
      setSquareDataSet();
    });
    
  };
  
  const clickSquare = () => {
    squares.forEach((square) =>  {
      square.addEventListener('click', handleClickSquare);

    });
  };

  const handleClickSquare = (e) => {
    // get currentPlayer from gameBoard
    let currentPlayer = gameBoard.getCurrentPlayer();
    let playerNames = playerData.getPlayers_name();

    // get #player-turn
    const playerTurnNotification = document.getElementById('player-turn');
    let win = inGame.isWin(playerTurnNotification);
    
    // target parent node
    const target = e.target.parentNode;
    
    if (e.target.textContent !== '') {
      return;
      
    } else if (currentPlayer === 'x') {
      e.target.removeAttribute('data-hover');
      

      target.dataset.id = 'x';
      if (!win) {
        playerTurnNotification.textContent = `${playerNames.player1_name} turn`;
      }
      target.removeEventListener('click', handleClickSquare);
      
    } else {    
      e.target.removeAttribute('data-hover');
      target.dataset.id = 'o';

      if (!win) {
        playerTurnNotification.textContent = `${playerNames.player2_name} turn`;
      }
      
      target.removeEventListener('click', handleClickSquare);
    }
    
    e.target.textContent = currentPlayer;
    currentPlayer = gameBoard.playerTurn();

    setButtonOfSquareDataSet(currentPlayer);
    console.log(currentPlayer);
    // revalue the win 
    win = inGame.isWin(playerTurnNotification);
    // get the win value for the draw check
    inGame.isDraw(playerTurnNotification, win);
  }

  // if every squares already marked
  const everySquaresMarked = (squares) => {
    const newSquares = [];
    squares.forEach(square => newSquares.push((square.dataset.id)));
    
    const isNanNewSquares = newSquares.every(
      element => isNaN(parseInt(element)));

    if (isNanNewSquares) {
      console.log(true);
      return true;
    }

  }; 

  // Coloring The Winning Square
  colorWinningSquare = (condition) => {
    const winCondittonFulfilled = condition;
    const squaresButtons = document.querySelectorAll('.square-button');
    winCondittonFulfilled.forEach((index) => {
      squaresButtons[index].classList.toggle('is-win');
    });
  };

  // Winning and draw notification
  const showWinningDrawNotification = (playerTurnNotification) => {
    const dialog =  document.querySelector('#winning-notification');
    const winningnotification =  document.querySelector('#winning-notification > div');
    const closeButton = document.getElementById('close-winning-notification-dialog');

    winningnotification.textContent = `${playerTurnNotification.textContent}`

    closeButton.addEventListener('click', () => dialog.close());
    
    dialog.showModal();
  }

  return {resetBoardHtml, clickSquare, handleClickSquare, everySquaresMarked, setButtonOfSquareDataSet, colorWinningSquare, showWinningDrawNotification, clickNewGame};

})()
HTMLHandler.clickSquare();
HTMLHandler.resetBoardHtml('o');
HTMLHandler.clickNewGame();

// INGAME PART
const inGame = (function() {
  
  // Winning
  const isWin = (playerTurnNotification) => {
    const playerNames = playerData.getPlayers_name();

    const squares = document.querySelectorAll('.square');
    let checkWin = false;
    let whoWin;
    
    // get the winning condition from gameBoard
    winninngCondition = gameBoard.getWinningCondition();

    // loop through winningCondition
    winninngCondition.forEach((condition) => {
      let conA = condition[0];
      let conB = condition[1];
      let conC = condition[2];
      
      if (squares[conA].dataset.id === squares[conB].dataset.id && squares[conB].dataset.id === squares[conC].dataset.id) {
        const currentPlayer = squares[conA].dataset.id;

        
        // delete event listener
        squares.forEach(square => square.removeEventListener('click', HTMLHandler.handleClickSquare));
        
        console.log('this is win');
        checkWin = true;
        
        // Change Score for the winner
        whoWin = currentPlayer;
        if (whoWin === 'o') {
          playerTurnNotification.textContent = `${playerNames.player1_name} won`;
          HTMLHandler.showWinningDrawNotification(playerTurnNotification);
          
          playerData.addPlayer1_Score();
          const player1_score = playerData.getPlayer1_Score();
          
          document.getElementById('player1-score').textContent = player1_score;
          
        } else if (whoWin === 'x') {
          playerTurnNotification.textContent = `${playerNames.player2_name} won`;
          HTMLHandler.showWinningDrawNotification(playerTurnNotification);
          
          playerData.addPlayer2_Score();
          const player2_score = playerData.getPlayer2_Score();
  
          document.getElementById('player2-score').textContent = player2_score;
        }

        colorWinningSquare(condition);

      }
      
    });
    
    return checkWin;
  }
  
  const isDraw = (playerTurnNotification, win) => {
    const squares = document.querySelectorAll('.square');

    if (!win && HTMLHandler.everySquaresMarked(squares)) {
      
      console.log(playerTurnNotification);
      console.log('draw');
      playerTurnNotification.textContent = 'the game is Draw!';

      
      HTMLHandler.showWinningDrawNotification(playerTurnNotification);
    }
    return true;
  }

  return {
    isWin, isDraw
  };

})()

// Player
const playerData = (() => {
  let player1_score = 0;
  let player2_score = 0;
  let player1_name;
  let player2_name;


  const dialog = document.querySelector('#dialog');
  
  // Show dialog
  dialog.showModal() 

  // Get Player Input And Submit
  const submitPlayerData = document.querySelector('#submit-player');

  // Submit PlayerData to playerBoard
  submitPlayerData.addEventListener('click', () => {
    // show the playerBoard notificatiion
    document.getElementById('player-board-container').style.display = 'flex';

    // First Player Turn Notification.
    const initializeTurnNotification = document.querySelector('#player-turn');

    const player1 = document.querySelector('#player1').value;
    const player2 = document.querySelector('#player2').value;
    
    const playerBoard = getPlayerInput(player1, player2);
    initializeTurnNotification.textContent = `${player1} turn`;
    editPlayerbboard(playerBoard);
  });

  // editPlayerbboard
  const editPlayerbboard = (playerBoard) => {
    let player1_Board = document.querySelector('#player1-board > span');
    let player2_Board = document.querySelector('#player2-board > span');
    
    player1_Board.textContent = `${playerBoard.player1}: (O)`;
    player2_Board.textContent = `${playerBoard.player2}: (X)`;
  };

  const getPlayerInput = (player1, player2) => {
    player1_name = player1;
    player2_name = player2;

    return {player1, player2}
  };

  const getPlayers_name = () => ({player1_name, player2_name});

  // Add Player Score
  const addPlayer1_Score = () => player1_score++;
  const addPlayer2_Score = () => player2_score++;

  // Get Player Score
  const getPlayer1_Score = () => player1_score;
  const getPlayer2_Score = () => player2_score;

  // Reset Player Score
  const resetPlayerScore = () => {
    player1_score = 0;
    player2_score = 0;

    return {player1_score, player2_score}
  }


  return {getPlayerInput, editPlayerbboard, addPlayer1_Score, addPlayer2_Score, getPlayer1_Score, getPlayer2_Score, getPlayers_name, resetPlayerScore};
  
})();

const getForm = () => {
  const dialog = document.getElementById('dialog');
  const form = document.getElementById('form-field');

  dialog.showModal();
}
