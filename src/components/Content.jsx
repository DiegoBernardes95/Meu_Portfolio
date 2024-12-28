import '../App.css';
import React from 'react';
import development from '/public/development.png';
import desk from '/public/desk.png';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import corrida from '/public/silhueta-do-corredor-correndo-rapido.png'
import musica from '/public/reprodutor-de-musica.png'
import cinema from '/public/pipoca.png'
import series from '/public/series.png'
import programacao from '/public/programacao-da-web.png'
import gmail from '/public/gmail.png'
import Footer from '../components/Footer';

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
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
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
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"
        },
        {
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
        },

    ]

    // CÓDIGO PARA A LISTAGEM DE PROJETOS
    const projectTitle = useRef();
    const [projectsCarousel, setProjectsCarousel] = useState(false);
    const [scrollProject, setScrollProject] = useState(false);

    const showProjects = () => {
        if (!projectsCarousel) {
            setProjectsCarousel(true);
            setScrollProject(false);
        } else if (projectsCarousel) {
            setProjectsCarousel(false);
            setScrollProject(true);
        }
    }

    useEffect(() => {
        if(scrollProject){
            projectTitle.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [scrollProject])
    
    // FIM DO CÓDIGO PARA LISTAGEM DE PROJETOS

    // FUNÇÕES DO NAVBAR
    const aboutMe = useRef()
    const showAboutMe = () => {
        aboutMe.current.scrollIntoView({ behavior: "smooth" });
    }
    const reload = () => {
        window.location.reload(1);
    }
    // FIM DA FUNÇÕES DO NAVBAR

    return (
        <main className='myContent'>
            {!projectsCarousel ? (
                <React.Fragment>
                    <nav className='myNavbar'>
                        <div className='titleNavbar'>
                            <h3><Link to='/Meu_Portfolio'>Diego Bernardes</Link></h3>
                        </div>
                        <ul className='listNavbar'>
                            <li onClick={reload}>Home</li>
                            <li onClick={showAboutMe}>Sobre</li>
                            <li onClick={showProjects}>Projetos</li>
                        </ul>
                    </nav>
                    <ul className='listContent'>
                        <li id='myFoto'></li>
                        <li id='aboutMe' ref={aboutMe} className='contentListAll'>
                            <div className='contentAll aboutMeContent'>
                                <h3>Meu nome é <br /><span>Diego Bernardes</span></h3>
                                <p>Sou carioca desde 1995, com formação em Desenvolvimento Web FullStack desde 2022. Desde o início da minha jornada tenho me fascinado cada vez mais pelo potencial criativo e inovador que a área de tecnologia tem a oferecer. Estou muito empolgado e confiante em minha carreira.</p>
                            </div>
                            <p className='subTitle'>1_sobre mim</p>
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
                                            <h3>Autônomo</h3>
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
                            <p className='subTitle'>2_Experiência</p>
                        </li>
                        <li id='myDog' className='contentListAll'>
                            <p className='subTitle'>3_meu doguinho max</p>
                        </li>
                        <li id='formation' className='contentListAll'>
                            <div id="carouselExample3" class="carousel slide slideExperience">
                                <div class="carousel-inner contentSlideExperience">
                                    <div class="carousel-item active">
                                        <div className='contentSlide'>
                                            <h3>Santander Bootcamp - Mobile com Flutter</h3>
                                            <p>Digital Innovation One - 2023<br /><div id='formationParagraph'>Desenvolvimento mobile focado no framework Flutter, para desenvolvimento de aplicações de forma híbrida.</div></p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='contentSlide'>
                                            <h3>Programadores Cariocas</h3>
                                            <p>Resilia Educação & Senac RJ - 2023<br /><div id='formationParagraph'>Desenvolvimento Web (Front-end e Back-end), com aulas de soft skills para o mercado de trabalho.</div></p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='contentSlide'>
                                            <h3>Ensino Médio</h3>
                                            <p>CIEP Federico Fellini - 2017</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className='subTitle'>4_Formação</p>
                        </li>
                        <li id='projects' onClick={showProjects} ref={projectTitle} className='contentListAll'>
                            <div className='contentAll'>
                                <h3>Projetos</h3>
                            </div>
                        </li>
                        <li id='technologies' className='contentListAll'>
                            <div className='contentAll techLogos'>
                                {imgTec.map(logos => (<img src={logos.logo} alt='' />))}
                            </div>
                            <p className='subTitle'>6_Tecnologias</p>
                        </li>

                        <li id='hobbies' className='contentListAll'>
                            <div className='myHobbies'>
                                <h3>Hobbies</h3>
                                <ul>
                                    <li><img src={corrida} alt="" /> - Correr</li>
                                    <li><img src={musica} alt="" /> - Ouvir música</li>
                                    <li><img src={cinema} alt="" /> - Ir ao cinema</li>
                                    <li><img src={series} alt="" /> - Assistir séries</li>
                                    <li><img src={programacao} alt="" /> - Estudar programação</li>
                                </ul>
                            </div>
                            <p className='subTitle'>7_Hobbies</p>
                        </li>
                        <li id='contact' className='contentListAll'>
                            <div className='contentAll contactContent'>
                                <h3>Contato</h3>
                                <p>Visite minhas redes sociais e confira meus projetos no <a href="https://github.com/DiegoBernardes95" target='_blank'>GitHub</a>.</p>
                                <p>Você é muito bem-vindo!</p>
                                <p><a href="mailto:dcb1618@gmail.com">
                                    <img src={gmail} alt="" />
                                    dcb1618@gmail.com
                                </a></p>
                            </div>
                        </li>
                        <li id='imgIlustrate2'>
                            <img src={development} alt="" />
                        </li>
                    </ul>
                    <Footer />
                </React.Fragment>
            ) : (
                <div id='allProjects' className='carousel slide'>
                    <div class="carousel-inner contentListProjects">
                        <div class="carousel-item active">
                            <div className='contentProjects' id='projectOne'>
                                <h3>Projeto <span>"O Clone"</span></h3>
                                <p>Projeto de clonagem da landing page da Netflix.<br />Feito com HTML, CSS e JavaScript puro para exercitar os conhecimentos básicos nestas tecnologias.</p>
                                <div className='btnProjects'>
                                    <button><a href="https://diegobernardes95.github.io/O_Clone/" target='_blank'>1_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='contentProjects' id='projectTwo'>
                                <h3>Projeto <span>"Decodificador"</span></h3>
                                <p>Codificador e Decodificador de Cifra de César e Base64.<br />Projeto desenvolvido no curso "Programadores Cariocas" com a intenção de exercitar a manipulação do DOM.</p>
                                <div className='btnProjects'>
                                    <button><a href="https://diegobernardes95.github.io/Projeto-Mensagem-Oculta/" target='_blank'>2_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='contentProjects' id='projectThree'>
                                <h3>Projeto <span>"Sweet Cine"</span></h3>
                                <p>O projeto Sweet Cine foi criado com o intuito de conceder ao usuário um lugar para guardar suas experiências no cinema, <br />catalogando seus filmes assistidos e cinemas frequentados e fornecendo um levantamento sobre os dados armazenados.</p>
                                <div className='btnProjects'>
                                    <button><a href="https://github.com/DiegoBernardes95/Sweet_Cine" target='_blank'>3_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='contentProjects' id='projectFour'>
                                <h3>Projeto <span>"Adote Aqui"</span></h3>
                                <p>Projeto desenvolvido no curso "Programadores Cariocas", utilizando HTML & CSS, para a ONG fictícia “Adote Aqui”.</p>
                                <div className='btnProjects'>
                                    <button><a href="https://diegobernardes95.github.io/Projeto-Adote-Aqui/" target='_blank'>4_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='contentProjects' id='projectSix'>
                                <h3>Projeto <span>"Página Pessoal"</span></h3>
                                <p>Meu primeiro projeto do curso de Desenvolvimento Web Fullstack.<br />A proposta aqui é fazer uma página de apresentação pessoal utilizando as habilidades adquiridas nas primeiras semanas do curso.</p>
                                <div className='btnProjects'>
                                    <button><a href="https://diegobernardes95.github.io/Projeto_Pagina_Pessoal/" target='_blank'>4_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='contentProjects' id='projectSeven'>
                                <h3>Projeto <span>"FrontEnders"</span></h3>
                                <p>Projeto desenvolvido em grupo - focado no front-end. <br />A proposta era de apresentar a nova ferramenta criada pela empresa fictícia "FrontEnders".</p>
                                <div className='btnProjects'>
                                    <button><a href="https://diegobernardes95.github.io/Projeto-FrontEnders/index.html" target='_blank'>4_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='contentProjects' id='projectEight'>
                                <h3>Projeto <span>"Candy Store"</span></h3>
                                <p>Primeiro projeto em grupo do curso de Desenvolvimento Web FullStack. <br /> O objetivo do projeto era desenvolver um site utilizando todo conhecimento adquirido sobre HTML, CSS e JavaScript no módulo.</p>
                                <div className='btnProjects'>
                                    <button><a href="https://zoedoceamarga.github.io/Projeto-em-grupo-Mod.1/" target='_blank'>4_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='contentProjects' id='projectNine'>
                                <h3>Projeto <span>"React Flix"</span></h3>
                                <p>Projeto desenvolvido no intuito de praticar React e Json-server. <br />Módulo 3 do curso de Desenvolvimento Web FullStack.</p>
                                <div className='btnProjects'>
                                    <button><a href="https://davijust.github.io/Home" target='_blank'>4_Acessar projeto</a></button>
                                    <button onClick={showProjects}>Ocultar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#allProjects" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#allProjects" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            )}
        </main>
    )
}
export default Content;