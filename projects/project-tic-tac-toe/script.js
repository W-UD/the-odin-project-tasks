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
    currentPlayer = 'o';
    HTMLHandler.resetBoardHtml(currentPlayer);
    HTMLHandler.clickSquare();
  };

  const getCurrentPlayer = () => currentPlayer;

  // player turn
  const playerTurn = () => {
    return currentPlayer === 'x' ? (currentPlayer = 'o') : (currentPlayer = 'x');
  };
  
  return {getBoardValue, startGame, playerTurn, getWinningCondition, getCurrentPlayer}
})();

const HTMLHandler = (() => {
  // Get Element Acces
  const squares = document.querySelectorAll('.square');
  const startButton = document.querySelector('#start-button');

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

  
  // Click startButton
  startButton.addEventListener('click', gameBoard.startGame);
  
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
        playerTurnNotification.textContent = 'player1 turn';
      }
      target.removeEventListener('click', handleClickSquare);
      
    } else {    
      e.target.removeAttribute('data-hover');
      target.dataset.id = 'o';

      if (!win) {
        playerTurnNotification.textContent = 'player2 turn';
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


  // -----------------------------------------------
  

  return {resetBoardHtml, clickSquare, handleClickSquare, everySquaresMarked, setButtonOfSquareDataSet};

})()
HTMLHandler.clickSquare();
HTMLHandler.resetBoardHtml('o');

// INGAME PART
const inGame = (function() {

  // Winning
  const isWin = (playerTurnNotification) => {
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
          playerTurnNotification.textContent = `player1 won`;

          playerData.addPlayer1_Score();
          const player1_score = playerData.getPlayer1_Score();
          
          document.getElementById('player1-score').textContent = player1_score;
          
        } else if (whoWin === 'x') {
          playerTurnNotification.textContent = `player2 won`;
          
          playerData.addPlayer2_Score();
          const player2_score = playerData.getPlayer2_Score();
  
          document.getElementById('player2-score').textContent = player2_score;
        }
        
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


  const dialog = document.querySelector('#dialog');
  
  // Show dialog
  dialog.showModal() 

  // Get Player Input And Submit
  const submitPlayerData = document.querySelector('#submit-player');

  // Submit PlayerData to playerBoard
  submitPlayerData.addEventListener('click', () => {
    // show the playerBoard notificatiion
    document.getElementById('player-board-container').style.display = 'flex';

    // First Player Turn Notification. '>' means a child from the element.
    document.querySelector('#player-turn').textContent = 'Player 1 Turn';

    const player1 = document.querySelector('#player1').value;
    const player2 = document.querySelector('#player2').value;
    
    const playerBoard = getPlayerInput(player1, player2);
    editPlayerbboard(playerBoard);
  });

  // editPlayerbboard
  const editPlayerbboard = (playerBoard) => {
    let player1_Board = document.querySelector('#player1-board > span');
    let player2_Board = document.querySelector('#player2-board > span');
    
    player1_Board.textContent = `${playerBoard.player1}: (O)`;
    player2_Board.textContent = `${playerBoard.player2}: (X)`;
  };

  const getPlayerInput = (player1, player2) => ({player1, player2});
  
  // Add Player Score
  const addPlayer1_Score = () => player1_score++;
  const addPlayer2_Score = () => player2_score++;

  // Get Player Score
  const getPlayer1_Score = () => player1_score;
  const getPlayer2_Score = () => player2_score;


  return {getPlayerInput, editPlayerbboard, addPlayer1_Score, addPlayer2_Score, getPlayer1_Score, getPlayer2_Score};
  
})();


