import React from 'react'
import './Box.css'
const Box = ({value,onClick}) => {
  return (
<>
<button className={value === "X" ? "box x" : "box y"} onClick={onClick}>{value}</button>
</>
  )
}

export default Box