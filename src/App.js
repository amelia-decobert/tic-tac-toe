// Import useState from react
import { useState } from "react"

// Create new component
// Square component receives value prop from board
export function Square({ value }) {
  // Display value inside button
  // Add onclick prop to handle button clicks
  return  <button className="square">{ value }</button>
}

// Create component
// The component maintains the list of squares and their contents
export default function Board() {
  // Define initial value and set value for squares with useState
  // Array of 9 elements filled null, corresponding to 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null))
  return (
    // Use JSX Fragments <></> to wrap JSX elements
  <>

  {/* Group squares by line */}
  <div className="board-row">

    {/* Use new component Square */}
    {/* Pass value prop to each square */}
    <Square value={squares[0]} />
    <Square value={squares[1]} /> 
    <Square value={squares[2]} /> 
  </div>
  <div className="board-row">
    <Square value={squares[3]} /> 
    <Square value={squares[4]} /> 
    <Square value={squares[5]} /> 
  </div>
  <div className="board-row"> 
    <Square value={squares[6]} /> 
    <Square value={squares[7]} /> 
    <Square value={squares[8]} /> 
  </div>
  </>
  )
}
