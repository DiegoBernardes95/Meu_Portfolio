import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Projetos from './components/Projetos'

function App() {

  return (
    <BrowserRouter>
      <div className="myContainer">
        <Navbar />
        <Routes>
          <Route path='/Meu_Portfolio' element={<Content />}/>
          <Route path='/Projetos' element={<Projetos />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App