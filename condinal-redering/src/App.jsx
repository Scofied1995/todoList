import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let todo = [
    {todo: "One",priorty:0},
    {todo: "Two",priorty:1},
    {todo: "Three",priorty:0},
    {todo: "Four",priorty:2},
    {todo: "Five",priorty:3},
    {todo: "Six",priorty:4},
    {todo: "Seven",priorty:5},
    {todo: "Eight",priorty:6},
    {todo: "Nine",priorty:7},
    {todo: "Ten",priorty:8},
    ];


  return (
    <>
    {todo.map((todoItem) => {
      return (
        <div className={todoItem.priorty} style={
          todoItem.priorty ==0 ? {background : "red"} : {background: "white"}
          }>
          {todoItem.todo}
        </div>
        
      )
    })}
    </>
  )
}

export default App
