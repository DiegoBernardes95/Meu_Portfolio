import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className="myContainer">
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;