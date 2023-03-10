import style from '../assets/styles/Projetos.module.css'
import adoteAqui from '../assets/imagens/Adote_aqui.mp4'
import codificador from '../assets/imagens/Codificator.mp4'
import clone from '../assets/imagens/O_Clone.mp4'
import react from '../assets/imagens/React_Flix.mp4'
import jsonServer from '../assets/imagens/jsonServer.mp4'
import sistemaResilia from '../assets/imagens/sistemaResilia.mp4'

export default function Projeto(){

    return(
        <div className={style.projetos}>
            <div className={style.textProjetos}>
                <h1><a name='Projetos'>Meus Projetos</a></h1>
                <p>Aqui estão alguns dos projetos - de front-end e back-end - que desenvolvi durante a minha jornada de estudos. <br /> Para conferir outros projetos, <a href="https://github.com/DiegoBernardes95" target='_blank'>clique aqui</a>.</p>
            </div>
            <section className={style.listaProjetos}>
                <div>
                    <video autoPlay loop muted src={adoteAqui}></video>
                    <h4>Projeto Adote Aqui</h4>
                    <p>Um site, utilizando  HTML & CSS, para a ONG fictícia “Adote Aqui”.</p>
                    <a href="https://diegobernardes95.github.io/Projeto-Adote-Aqui/" target='_blank'>Link do Projeto</a>
                </div>
                <div>
                    <video autoPlay loop muted src={codificador}></video>
                    <h4>Projeto Mensagem Oculta</h4>
                    <p>Codificador e Decodificador de Cifra de César e Base64.</p>
                    <a href="https://diegobernardes95.github.io/Projeto-Mensagem-Oculta/" target='_blank'>Link do Projeto</a>
                </div>
                <div>
                    <video autoPlay loop muted src={jsonServer}></video>
                    <h4>Projeto Json-Server</h4>
                    <p>Uma API Json-Server que foi utilizada no Projeto React Flix.</p>
                    <a href="https://github.com/DiegoBernardes95/Projeto-Json-server" target='_blank'>Link do Projeto</a>
                </div>
                <div>
                    <video autoPlay loop muted src={clone}></video>
                    <h4>Projeto O Clone</h4>
                    <p>Clonagem da landing page da Netflix.</p>
                    <a href="https://diegobernardes95.github.io/O_Clone/" target='_blank'>Link do Projeto</a>
                </div>
                <div>
                    <video autoPlay loop muted src={react}></video>
                    <h4>Projeto React Flix</h4>
                    <p>Um site criado com React que consome a API Json-Server criada anteriormente.</p>
                    <a href="https://davijust.github.io/Home/" target='_blank'>Link do Projeto</a>
                </div>
                <div>
                    <video autoPlay loop muted src={sistemaResilia}></video>
                    <h4>Projeto Sistema Resilia</h4>
                    <p>Projeto de modelagem de um banco de dados destinado ao gerenciamento de uma instituição educacional.</p>
                    <a href="https://github.com/DiegoBernardes95/Sistema_Resilia" target='_blank'>Link do Projeto</a>
                </div>
            </section>
        </div>
    )
}