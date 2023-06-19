import { useState } from 'react';
import './App.css';
import Board from './components/Board';
function App() {

  const[items, setItems] = useState (Array(9).fill(null));
  const [isXPlaying, setIsXPlaying]= useState(true);

  const handleClick = (boxInd) => {
{
 const updatedBoard = items.map((curElem,ind) => {
if (ind===boxInd){
return isXPlaying === true ? "X" : "O";
}
else {
  return curElem;
}
  })
  setItems(updatedBoard);
  setIsXPlaying(!isXPlaying);
}
  }
  return (
<>
<Board item={items} onClick={handleClick}/>
</>
  );
}

export default App;
