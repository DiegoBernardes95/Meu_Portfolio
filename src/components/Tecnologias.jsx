import style from '../assets/styles/Tecnologias.module.css'

export default function Tecnologias(){

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
        }
    ]

    return(
        <div className={style.tecnologias}>
            <div className={style.textTecno}>
                <h1 className='sectionTitle'><a name='Tecnologias'>Tecnologias</a></h1>
                <p className='pScroll'>Essas são algumas das tecnologias que aprendi a manusear e utilizar nos meus projetos. <br /> Me empenho constantemente para aperfeiçoar minhas técnicas em cada uma delas. </p>
            </div>
            <section className={style.imgTecno}>
                {imgTec.map(logos => <img className='sectionIconTec' src={logos.logo} alt="logos" />)}
            </section>
        </div>
    )
}