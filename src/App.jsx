import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import './App.css'
import Content from './components/Content'

function App() {

  return (
    <BrowserRouter>
      <div className="myContainer">
        <Content />
      </div>
    </BrowserRouter>
  )
}

export default App;