import '../App.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='myNavbar'>
            <div className='titleNavbar'>
                <h3>Diego Bernardes</h3>
            </div>
            <ul className='listNavbar'>
                <li><Link to={'/Meu_Portfolio'}>Home</Link></li>
                <li>Sobre</li>
                <li><Link to={'/Projetos'}>Projetos</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;