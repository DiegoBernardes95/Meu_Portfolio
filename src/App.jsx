import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Biografia from './components/Biografia.jsx';
import Tecnologias from './components/Tecnologias.jsx';
import Projeto from './components/Projetos.jsx';
import Contato from './components/Contato.jsx';
import './App.css'
import ScrollReveal from 'scrollreveal';

function App() {
  window.sr = ScrollReveal({ reset: true });

  // Efeito Scroll nos títulos
  useEffect(() => {
    sr.reveal('.sectionTitle', {
      duration: 1000,
      distance: '-60px',
    })
  }, []);

  // Efeito Scroll no título da seção de contato
  useEffect(() => {
    window.sr = ScrollReveal({reset: true})
    sr.reveal('.sectionContato', {
        duration: 1000,
        origin: 'rigth',
        distance: '70px'
    }, [])
})

  // Efeito Scroll nos parágrafos
  useEffect(() => {
    sr.reveal('.pScroll', {
      duration: 1000,
      distance: '50px',
      origin: 'left'
    })
  })

  // Efeito Scroll nas imagens
  useEffect(() => {
    sr.reveal('.imgScroll', {
      duration: 2500,
      origin: 'right',
      distance: '60px'
    })
  }, [])

  // Efeito Scroll na imagem da seção de Biografia
  useEffect(() => {
    sr.reveal('.imgScrollBio', {
      duration: 2500,
      scale: '.70'
    })
  })

  // Efeito Scroll nos icones
    useEffect(() => {
      sr.reveal('.sectionIcon', {
        duration: 1000,
        interval: 150
      })
    })

    // Efeito Scroll nos icones da seção de Tecnologia
    useEffect(() => {
      sr.reveal('.sectionIconTec', {
        duration: 1000,
        interval: 100
      })
    })

    // Efeito Scroll nos cards da seção de Projetos
    useEffect(() => {
      sr.reveal('.sectionProjetos', {
        duration: 1000,
        distance: '40px',
        origin: 'top',
        interval: 150
        
      })
    })

  return (
    <BrowserRouter class='App'>
      <Navbar />
      <Header />
      <Biografia />
      <Tecnologias />
      <Projeto />
      <Contato />
      <Footer />
    </BrowserRouter>
  )
}

export default App
