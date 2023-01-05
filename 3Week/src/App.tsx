import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <div className='box-border rounded-lg h-fit w-96 p-4 border-8 border-teal-400 bg-white'>
        <div className='pb-3 text-xl text-black font-semibold'>
          Chaeyeon's ToDoList
        </div>
          <ToDoInput />
          <TodoList />
      </div>
    </div>
  )
}

export default App
