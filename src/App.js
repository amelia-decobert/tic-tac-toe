import { useState } from "react"

export function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

export function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = winner + " a gagné !";
  } else {
    status = "Prochain tour : " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default function Game() {
  // Do not store xIsNext as a separate state...
  // const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  // Keep track of which step the user is currently viewing
  const [currentMove, setCurrentMove] = useState(0)
  // ... instead, figure it out based on the current move
  const xIsNext = currentMove % 2 === 0
  // Render the currently selected move
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    // If you "go back in time" and then make a new move from that point
    // You only want to keep the history up to that point
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    // Each time a move is made, you need to update current move to point to the latest history entry
    setCurrentMove(nextHistory.length - 1)
    // No longer need it
    // setXIsNext(!xIsNext)
  }

  // Now, there is no chance for xIsNext to get out of sync with currentMove

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
    // No longer need it
    // setXIsNext(nextMove % 2 === 0)
  }

  // Use map to transform history of moves into React elements representing buttons
  const moves = history.map((squares, move) => {
    let description

    if (move > 0) {
      description = "Go to move #" + move
    } else {
      description = "Go to game start"
    }
    return (
      // In the history, each past move has a unique ID associated with it
      // so it's safe to use the move index as a key
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        {/* Display a list of buttons to jump to past moves */}
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}