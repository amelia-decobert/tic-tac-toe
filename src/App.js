// Create new component
// Square component receives value prop from board
export function Square({ value }) {
  // Declare handleclick function
  function handleclick() {
    console.log("Click!")
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
    {/* Pass value prop to each square component */}
    <Square value="1" />
    <Square value="2" /> 
    <Square value="3" /> 
  </div>
  <div className="board-row">
    <Square value="4" /> 
    <Square value="5" /> 
    <Square value="6" /> 
  </div>
  <div className="board-row"> 
    <Square value="7" /> 
    <Square value="8" /> 
    <Square value="9" /> 
  </div>
  </>
  )
}
