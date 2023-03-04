import style from '../assets/styles/Contato.module.css';
import envelope from '../assets/imagens/envelope.png';

export default function Contato(){

    return(
        <div className={style.contato}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#fcb201" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,58.7C640,64,800,128,960,133.3C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
          <div className={style.cardContato}>
            <div className={style.infoContato}>
                <h1>Contato</h1>
                <p><strong>Visite minhas redes sociais e confira meus projetos no GitHub. Estou nessa jornada para me desenvolver ainda mais e conquistar meu espaço no mercado, e sou grato em poder compartilhar meus avanços.<br />Você é muito bem-vindo!</strong></p>
                <ul>
                    <li><a href="https://instagram.com/diego.dovahkiin" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank" /></a></li>
                    <li><a href = "mailto:dcb1618@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" /></a></li>
                    <li><a href="https://www.linkedin.com/in/diegobernardes-webdev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/></a></li>
                    <li><a href="https://github.com/DiegoBernardes95" target='_blank'><img src="https://img.shields.io/badge/-GitHub-lightgrey?style=for-the-badge&logo=github" target="_blank"/></a></li>
                </ul>
            </div>
            <div className={style.contatoImg}>
                <img src={envelope} alt="envelope" />
            </div>
          </div>
        </div>
    )
}