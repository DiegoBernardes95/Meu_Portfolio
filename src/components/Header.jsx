import style from '../assets/styles/Header.module.css'
import Eu from '../assets/imagens/foto-perfil-redonda.png'
import linkedin from '../assets/imagens/linkedin.png'
import instagram from '../assets/imagens/instagram.png'
import github from '../assets/imagens/github.png'

export default function Header() {

    return (
        <div className={style.myCard}>
            <div className={style.cardMe}>
                <div className={style.infoCard}>
                    <h1>Olá, meu nome é <br /></h1>
                    <p>Sou carioca desde 1995, e atualmente estudo Desenvolvimento Web FullStack. <br /> Desde o início da minha jornada tenho me fascinado cada vez mais pelo potencial criativo e inovador que a área tem a oferecer.
                        Estou muito empolgado nesses primeiros passos em minha carreira.</p>
                    <ul className={style.listRedes}>
                        <li>
                            <a href="https://www.linkedin.com/in/diegobernardes-webdev/" target='_blank'>
                                <img src={linkedin} alt="linkedin" />
                                <p>LinkedIn</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/DiegoBernardes95" target='_blank'>
                                <img src={github} alt="github" />
                                <p>GitHub</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/diego.dovahkiin/" target='_blank'>
                                <img src={instagram} alt="instagram" />
                                <p>Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.imgCard}>
                    <img src={Eu} alt="minha foto" />
                </div>
            </div>
            <q>O sábio não possui todas as respostas, mas ele faz todas as perguntas...</q>
        </div>
    )
}