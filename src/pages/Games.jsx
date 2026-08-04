import { useState } from 'react';

function Games() {
  const [activeGame, setActiveGame] = useState(null);

  const games = [
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      icon: '❌',
      description: 'Classic 3x3 grid game. Play against a friend!',
      color: '#5e35b1',
      component: TicTacToe,
    },
    {
      id: 'rock-paper-scissors',
      title: 'Rock Paper Scissors',
      icon: '✊',
      description: 'Play against the computer in this classic game!',
      color: '#e74c3c',
      component: RockPaperScissors,
    },
    {
      id: 'memory-game',
      title: 'Memory Game',
      icon: '🧠',
      description: 'Test your memory by matching pairs!',
      color: '#2ecc71',
      component: MemoryGame,
    },
    {
      id: 'number-guess',
      title: 'Number Guesser',
      icon: '🎯',
      description: 'Guess the random number between 1-100!',
      color: '#f39c12',
      component: NumberGuesser,
    },
  ];

  return (
    <section className="page-section" id="games">
      <div className="section-heading">
        <p>🎮 Let's Play</p>
        <h1>Play Games</h1>
      </div>

      {!activeGame ? (
        <div className="games-grid">
          {games.map((game) => (
            <div
              key={game.id}
              className="game-card"
              onClick={() => setActiveGame(game.id)}
              style={{ borderColor: game.color }}
            >
              <div className="game-icon" style={{ background: game.color }}>
                {game.icon}
              </div>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <button className="btn primary-btn">Play Now</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="game-container">
          <button
            className="btn secondary-btn back-btn"
            onClick={() => setActiveGame(null)}
          >
            ← Back to Games
          </button>
          <div className="game-wrapper">
            {games.find(g => g.id === activeGame)?.component()}
          </div>
        </div>
      )}
    </section>
  );
}

// ============================================
// TIC TAC TOE GAME
// ============================================
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (newBoard.every(square => square)) {
      setWinner('Draw');
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="game-tic-tac-toe">
      <h3>Tic Tac Toe</h3>
      <div className="game-status">
        {winner ? (
          winner === 'Draw' ? '🤝 It\'s a Draw!' : `🎉 Winner: ${winner}!`
        ) : (
          `Player ${isXTurn ? 'X' : 'O'}'s Turn`
        )}
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${cell ? 'taken' : ''}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="btn primary-btn reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

// ============================================
// ROCK PAPER SCISSORS
// ============================================
function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const choices = ['✊', '✋', '✌️'];
  const choiceNames = ['Rock', 'Paper', 'Scissors'];

  const play = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult('Draw! 🤝');
    } else if (
      (choice === '✊' && computer === '✌️') ||
      (choice === '✋' && computer === '✊') ||
      (choice === '✌️' && computer === '✋')
    ) {
      setResult('You Win! 🎉');
      setScore(prev => ({ ...prev, player: prev.player + 1 }));
    } else {
      setResult('Computer Wins! 💻');
      setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="game-rps">
      <h3>Rock Paper Scissors</h3>
      <div className="score-board">
        <span>You: {score.player}</span>
        <span>Computer: {score.computer}</span>
      </div>
      <div className="rps-choices">
        {choices.map((choice, index) => (
          <button
            key={index}
            className="rps-btn"
            onClick={() => play(choice)}
            disabled={!!result}
          >
            {choice}
            <span>{choiceNames[index]}</span>
          </button>
        ))}
      </div>
      {result && (
        <div className="rps-result">
          <div className="rps-show">
            <div>
              <p>You</p>
              <span className="rps-icon">{playerChoice}</span>
            </div>
            <div className="rps-vs">VS</div>
            <div>
              <p>Computer</p>
              <span className="rps-icon">{computerChoice}</span>
            </div>
          </div>
          <h3 className="result-text">{result}</h3>
          <button className="btn primary-btn" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================
// MEMORY GAME
// ============================================
function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState(false);

  const emojis = ['🍎', '🍋', '🍇', '🍉', '🍓', '🍑', '🍊', '🍒'];

  const initializeGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setStarted(true);
  };

  const handleCardClick = (index) => {
    if (flipped.length === 2 || cards[index].matched || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, first, second]);
        setFlipped([]);
        if (matched.length + 2 === cards.length) {
          setTimeout(() => {
            alert(`🎉 You won in ${moves + 1} moves!`);
          }, 300);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="game-memory">
      <h3>Memory Game</h3>
      {!started ? (
        <button className="btn primary-btn" onClick={initializeGame}>
          Start Game
        </button>
      ) : (
        <>
          <div className="memory-info">
            <span>Moves: {moves}</span>
            <span>Matched: {matched.length / 2} / {emojis.length}</span>
            <button className="btn secondary-btn" onClick={initializeGame}>
              New Game
            </button>
          </div>
          <div className="memory-grid">
            {cards.map((card, index) => (
              <button
                key={card.id}
                className={`memory-card ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
                onClick={() => handleCardClick(index)}
                disabled={matched.includes(index)}
              >
                {flipped.includes(index) || matched.includes(index) ? card.emoji : '❓'}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================
// NUMBER GUESSER
// ============================================
function NumberGuesser() {
  const [targetNumber, setTargetNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100!');
    setAttempts(0);
    setGameOver(false);
  };

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('Please enter a number between 1-100!');
      return;
    }

    setAttempts(a => a + 1);

    if (num === targetNumber) {
      setMessage(`🎉 Correct! You got it in ${attempts + 1} attempts!`);
      setGameOver(true);
    } else if (num < targetNumber) {
      setMessage('⬆️ Too low! Try a higher number.');
    } else {
      setMessage('⬇️ Too high! Try a lower number.');
    }
    setGuess('');
  };

  return (
    <div className="game-number-guesser">
      <h3>Number Guesser</h3>
      {!targetNumber ? (
        <button className="btn primary-btn" onClick={startGame}>
          Start Game
        </button>
      ) : (
        <>
          <div className="guesser-info">
            <span>Attempts: {attempts}</span>
          </div>
          <p className="guesser-message">{message}</p>
          <div className="guesser-input">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter number..."
              disabled={gameOver}
              min="1"
              max="100"
            />
            <button
              className="btn primary-btn"
              onClick={handleGuess}
              disabled={gameOver}
            >
              Guess
            </button>
          </div>
          <button className="btn secondary-btn" onClick={startGame}>
            New Game
          </button>
        </>
      )}
    </div>
  );
}

export default Games;