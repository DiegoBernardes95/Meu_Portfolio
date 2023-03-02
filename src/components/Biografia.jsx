import style from '../assets/styles/Biografia.module.css';
import PC from '../assets/imagens/desktop.png';

export default function Biografia() {

    return (
        <div className={style.fullBio}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fill="#fcb201" fill-opacity="1" d="M0,288L48,256C96,224,192,160,288,144C384,128,480,160,576,197.3C672,235,768,277,864,277.3C960,277,1056,235,1152,202.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className={style.molduraSvg}></path></svg>
            <div className={style.myBio}>
            <a name='Sobre'></a>
                <div className={style.textBio}>
                    <h1>Como tudo começou...</h1>
                    <p>Comecei minha história no desenvolvimento web em setembro de 2022, através do projeto Programadores Cariocas, da Prefeitura do Rio em parceria com o Resilia Educação e Senac RJ.</p>
                    <p>Desde então estudo as principais tecnologias presentes no mercado, tanto em back-end quanto em front-end.</p>
                    <p>Tenho me empenhado para dar início a minha carreira dentro dessa área que aprendi a amar. Quero trabalhar no desenvolvimento de aplicações que auxiliem no cotidiano do máximo de usuários possíveis.</p>
                </div>
                <div className={style.imgBio}>
                    <img src={PC} alt="pc" />
                </div>    
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fill="#fcb201" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,122.7C384,149,480,203,576,229.3C672,256,768,256,864,218.7C960,181,1056,107,1152,106.7C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    )
}