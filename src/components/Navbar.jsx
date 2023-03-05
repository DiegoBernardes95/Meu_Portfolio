import style from '../assets/styles/Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div className={style.navBar}>
            <h2>meu portfolio</h2>
            <ul className={style.listNavbar}>
                <li><a href='#Sobre'>Sobre</a></li>
                <li><a href='#Tecnologias'>Tecnologias</a></li>
                <li><a href="#Projetos">Projetos</a></li>
                <li><a href="#Contato">Contatos</a></li>
            </ul>
        </div>
    )
}