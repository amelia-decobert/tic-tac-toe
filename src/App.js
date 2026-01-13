// Create new component
export function Square() {
  return  <button className="square">1</button>
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
