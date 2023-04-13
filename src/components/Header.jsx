import style from '../assets/styles/Header.module.css'
import Eu from '../assets/imagens/foto-perfil-redonda.png'
import linkedin from '../assets/imagens/linkedin.png'
import instagram from '../assets/imagens/instagram.png'
import github from '../assets/imagens/github.png'
import Typewriter from 'typewriter-effect';

export default function Header() {

    const nameAnimation =
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .changeDelay(160)
                    .typeString("Diego Bernardes...")
                    .start();
            }}
        />

    return (
        <div className={style.myCard}>
            <div className={style.cardMe}>
                <div className={style.infoCard}>
                    <h1 className='sectionTitle'>Olá, meu nome é <br /><span>{nameAnimation}</span></h1>
                    <p className='pScroll'>Sou carioca desde 1995, com formação de nível técnico em Desenvolvimento Web FullStack. <br /> Desde o início da minha jornada tenho me fascinado cada vez mais pelo potencial criativo e inovador que a área de tecnologia tem a oferecer. Estou muito empolgado nesses primeiros passos em minha carreira.</p>
                    <ul className={style.listRedes}>
                        <li className='sectionIcon'>
                            <a href="https://www.linkedin.com/in/diegobernardes-webdev/" target='_blank'>
                                <img src={linkedin} alt="linkedin" />
                                <p>LinkedIn</p>
                            </a>
                        </li>
                        <li className='sectionIcon'>
                            <a href="https://github.com/DiegoBernardes95" target='_blank'>
                                <img src={github} alt="github" />
                                <p>GitHub</p>
                            </a>
                        </li>
                        <li className='sectionIcon'>
                            <a href="https://www.instagram.com/diego.dovahkiin/" target='_blank'>
                                <img src={instagram} alt="instagram" />
                                <p>Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.imgCard}>
                    <div className='imgScroll'>
                        <img src={Eu} alt="minha foto" />
                    </div>
                </div>
            </div>
            <p className='pScroll'><q> Os dois dias mais importantes da sua vida são o dia em que você nasceu <br /> ... e o dia em que você descobre o porquê.</q><br />Mark Twain</p>
        </div>
    )
}