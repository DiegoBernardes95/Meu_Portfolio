import style from '../assets/styles/Contato.module.css';

export default function Contato(){

    return(
        <div className={style.contato}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fcb201" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,58.7C640,64,800,128,960,133.3C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className={style.infoContato}>
                <h1>Contato</h1>
                <div className={style.cardContato}>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/diegobernardes-webdev/" target='_blank'>LinkedIn</a></li>
                        <li><a href="https://github.com/DiegoBernardes95" target='_blank'>GitHub</a></li>
                        <li><a href="https://www.instagram.com/diego.dovahkiin/" target='_blank'>Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}