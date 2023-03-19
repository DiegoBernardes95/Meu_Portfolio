import '../assets/styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const refreshSite = () => {
        window.location.reload();
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark navBar">
            <div class="container-fluid">
                <div class="navLogo">
                    <a name="Inicio"></a>
                    <h2 onClick={refreshSite}>meu portfolio</h2>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse listNavbar" id="navbarNav">
                    <ul class="navbar-nav gap-4">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#Sobre">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Tecnologias">Tecnologias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Projetos">Projetos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}