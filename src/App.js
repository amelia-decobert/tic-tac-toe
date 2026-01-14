// Import useState from react
import { useState } from "react"

// Create new component
// Square component receives value prop and onSquareClick prop from board
export function Square({ value, onSquareClick }) {
  // Display value inside button
  // Add onclick prop to handle button clicks
  return  <button className="square" onClick={onSquareClick}>{value}</button>
}

// Create component
// The component maintains the list of squares and their contents
export default function Board() {
  // Define initial value and set value for squares with useState
  // Array of 9 elements filled null, corresponding to 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Define handleClick function to use it in onSquareClick prop
  // Add "i" in params function to receive index of the square to update
  function handleClick(i) {
    // Get a copy of the array with .slice() method
    const nextSquares = squares.slice();
    //Update new array by adding "X" on square with index "i"
    nextSquares[i] = "X";
    // Call setSquares function to inform that state has changed
    setSquares(nextSquares);
  }
  return (
    // Use JSX Fragments <></> to wrap JSX elements
  <>

  {/* Group squares by line */}
  <div className="board-row">

    {/* Use new component Square */}
    {/* Pass value prop to each square to define their index and onSquareClick prop to call handleClick function on index "i" */}
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

// HOW IT WORKS:
// 1.Clicking on the upper left square runs the function that the `button` received as its `onClick` prop from the `Square`. 
// The `Square` component received that function as its `onSquareClick` prop from the `Board`. 
// The `Board` component defined that function directly in the JSX.
// It calls `handleClick` with an argument of `0`.

// 2.`handleClick` uses the argument (`0`) to update the first element of the `squares` array from `null` to `X`.

// 3.The `squares` state of the `Board` component was updated, so the `Board` and all of its children re-render.
// This causes the `value` prop of the `Square` component with index `0` to change from `null` to `X`.