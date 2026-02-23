import { useState } from "react"

export function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

// Make the Board component fully controlled by the props it receives
export function Board({xIsNext, squares, onPlay}) {
  // Then, remove the useState
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

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

    // And remove the setter calls
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);

    // Now replace with a single call to onPlay function
    // so the Game component can update the Board when the user clicks a square
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

// Game component has full control over the Board's data and lets it instruct the Board to render previous turns from the history
export default function Game() {
  // Add some state to the component to track which player is next and the history of moves
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  // Read the last squares array from the history to render the squares for the current move
  const currentSquares = history[history.length - 1]

  // handlePlay function will be called by the Board component to update the game
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
    }
    
  return (
    <div className="game">
      <div className="game-board">
        {/* Pass xIsNext, currentSquares and handlePlay as props */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
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