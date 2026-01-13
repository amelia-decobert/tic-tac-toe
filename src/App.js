// Import useState from react
import { useState } from "react"

// Create new component
export function Square() {
  // Define intial value and set value with useState
  // null as initial value
  const [value, setValue] = useState(null)

  // Declare handleclick function
  function handleclick() {
    // Set up "X" value to display X on click
    setValue("X")
    // when the button clicked, call set function to update the square
    // After updating, the square will show "X" on board
  }

  // Display value inside button
  // Add onclick prop to handle button clicks
  return  <button className="square" onClick={handleclick}>{ value }</button>
}

// Create component
export default function Board() {
  return (
    // Use JSX Fragments <></> to wrap JSX elements
  <>

  {/* Group squares by line */}
  <div className="board-row">

    {/* Use new component Square */}
    <Square />
    <Square /> 
    <Square /> 
  </div>
  <div className="board-row">
    <Square /> 
    <Square /> 
    <Square /> 
  </div>
  <div className="board-row"> 
    <Square /> 
    <Square /> 
    <Square /> 
  </div>
  </>
  )
}
