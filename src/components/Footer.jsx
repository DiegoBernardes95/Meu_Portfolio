import style from '../assets/styles/Footer.module.css'

export default function Footer(){

    return(
        <div className={style.fooTer}>
            <h2>Diego <br /> Bernardes</h2>
            <ul className={style.listFooter}>
                <li><a href="#Sobre">Sobre</a></li>
                <li><a href="#Tecnologias">Tecnologias</a></li>
                <li><a href="#Projetos">Projetos</a></li>
            </ul>
            <h2>©2023</h2>
        </div>
    )
}