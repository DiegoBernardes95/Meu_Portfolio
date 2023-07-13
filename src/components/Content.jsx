import { Link } from 'react-router-dom';
import '../App.css';
import development from '/public/development.png';
import desk from '/public/desk.png';
import { useEffect, useRef, useState } from 'react';
import corrida from '/public/silhueta-do-corredor-correndo-rapido.png'
import musica from '/public/reprodutor-de-musica.png'
import cinema from '/public/pipoca.png'
import series from '/public/series.png'
import programacao from '/public/programacao-da-web.png'

const Content = () => {
    const imgTec = [
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
        }
    ]

    const hobbies = useRef();
    const [mouseHover, setMouseHover] = useState(false);

    const mouseEnter = () => {
        setMouseHover(true);
    }
    const mouseLeave = () => {
        setMouseHover(false);
    }

    useEffect(() => {
        if(mouseHover){
            hobbies.current.style.zIndex = '2';
        } else{
            hobbies.current.style.zIndex = "-1";
        }
    }, [mouseHover])

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <main className='myContent'>
            <ul className='listContent'>
                <li id='myFoto'></li>
                <li id='aboutMe' className='contentListAll'>
                    <div className='contentAll aboutMeContent'>
                        <h3>Meu nome é <br />Diego Bernardes</h3>
                        <p>Sou carioca desde 1995, com formação de nível técnico em Desenvolvimento Web FullStack. Desde o início da minha jornada tenho me fascinado cada vez mais pelo potencial criativo e inovador que a área de tecnologia tem a oferecer. Estou muito empolgado nesses primeiros passos em minha carreira.</p>

                    </div>
                    <p className='subTitle'>sobre mim</p>
                </li>
                <li id='workArea'></li>
                <li id='imgIlustrate'>
                    <img src={desk} alt="" />
                </li>
                <li id='aboutExperience'>
                    <div id="carouselExample" class="carousel slide slideExperience">
                        <div class="carousel-inner contentSlideExperience">
                            <div class="carousel-item active">
                                <div className='contentSlide'>
                                    <sub>2019 - 2021</sub>
                                    <h3>Vendedor Autônomo</h3>
                                    <p>Atuação como vendedor autônomo em plataformas digitais na área de games, tendo como principais atividades a análise de mercado, compra de produtos, upgrade de produtos para revenda, negociação com clientes e venda de produtos seguindo as especificações de upgrade.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='contentSlide'>
                                    <sub>abril/2014 - julho/2014</sub>
                                    <span className='mt-2'>Pincelart Serviços Promocionais LTDA - ME</span>
                                    <h3>Repositor</h3>
                                    <p>Responsável pelo recebimento de mercadorias, organização do estoque, limpeza da área de trabalho, abastecimento de produtos na loja, etc.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className='contentSlide'>
                                    <sub>2013 - 2014</sub>
                                    <span className='mt-2'>Arcos Dourados Com. de Alimentos LTDA - WLA</span>
                                    <h3>Atendente de Restaurante</h3>
                                    <p>Responsável pelo atendimento de clientes, preparação de pedidos, manutenção da area de trabalho, organização de estoque e recebimento de mercadorias.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p className='subTitle'>Experiência</p>
                </li>
                <li id='myDog' className='contentListAll'>
                    <p className='subTitle'>meu doguinho max</p>
                </li>
                <li id='formation' className='contentListAll'>
                    <div className='contentAll'>
                        <h3>Ensino Médio</h3>
                        <p>CIEP Federico Fellini - 2017</p>
                        <h3>Desenvolvimento Web</h3>
                        <p>Resilia Educação & Senac RJ - 550h <br /><div id='formationParagraph'>Desenvolvimento Web (Front-end e Back-end), com aulas de soft skills para o mercado de trabalho.</div></p>

                    </div>
                    <p className='subTitle'>Formação</p>
                </li>
                <li id='projects' className='contentListAll'>
                    <div className='contentAll'>
                        <h3><Link onClick={scrollTop} to="/Projetos">Projetos</Link></h3>
                    </div>
                </li>
                <li id='technologies' className='contentListAll'>
                    <div className='contentAll techLogos'>
                        {imgTec.map(logos => (<img src={logos.logo} alt='' />))}
                    </div>
                    <p className='subTitle'>Tecnologias</p>
                </li>
                <li id='hobbies' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}  className='contentListAll'>
                    <div ref={hobbies} className='myHobbies'>
                        <h3>Hobbies</h3>
                        <ul>
                            <li><img src={corrida} alt="" /> - Correr</li>
                            <li><img src={musica} alt="" /> - Ouvir música</li>
                            <li><img src={cinema} alt="" /> - Ir ao cinema</li>
                            <li><img src={series} alt="" /> - Assistir séries</li>
                            <li><img src={programacao} alt="" /> - Estudar programação</li>
                        </ul>
                    </div>
                    <p className='subTitle'>Hobbies</p>
                </li>
                <li id='contact' className='contentListAll'>
                    <div className='contentAll'>
                        <h3>Contato</h3>
                        <p>Visite minhas redes sociais e confira meus projetos no <a href="https://github.com/DiegoBernardes95" target='_blank'>GitHub</a>.</p>
                        <p>Você é muito bem-vindo!</p>
                        <p><a href="mailto:dcb1618@gmail.com">dcb1618@gmail.com</a></p>
                    </div>
                </li>
                <li id='imgIlustrate2'>
                    <img src={development} alt="" />
                </li>
            </ul>
        </main>
    )
}

export default Content;