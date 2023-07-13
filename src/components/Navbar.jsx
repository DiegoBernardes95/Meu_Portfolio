import '../App.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <nav className='myNavbar'>
            <div className='titleNavbar'>
                <h3>Diego Bernardes</h3>
            </div>
            <ul className='listNavbar'>
                <li><Link to={'/Meu_Portfolio'}>Home</Link></li>
                <li><Link onClick={scrollTop} to={'/Meu_Portfolio'}>Sobre</Link></li>
                <li><Link to={'/Meu_Portfolio/Projetos'}>Projetos</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;