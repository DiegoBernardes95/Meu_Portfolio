import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Biografia from './components/Biografia.jsx';
import Tecnologias from './components/Tecnologias.jsx';
import Projeto from './components/Projetos.jsx';
import './App.css'

function App() {


  return (
    <BrowserRouter class='App'>
      <Navbar />
      <Header />
      <Biografia />
      <Tecnologias />
      <Projeto />
      <Footer />
    </BrowserRouter>
  )
}

export default App
