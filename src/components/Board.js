import React from 'react'
import Box from './Box'
import './Board.css';


const Board = ({item , onClick}) => {
  return (
  <>
<div className="board">
{
item.map((curElem,index) => {
return <Box value={curElem} onClick={()=>onClick(index)}/>
})}
</div>
  </>
  )
}

export default Board