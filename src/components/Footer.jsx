import style from '../assets/styles/Footer.module.css'

export default function Footer(){

    const ano = new Date();

    return(
        <div className={style.fooTer}>
            <h2>Diego <br /> Bernardes</h2>
            <ul className={style.listFooter}>
                <li><a href="#Sobre">Sobre</a></li>
                <li><a href="#Tecnologias">Tecnologias</a></li>
                <li><a href="#Projetos">Projetos</a></li>
                <li><a href="#Contato">Contatos</a></li>
            </ul>
            <h6><strong>©{ano.getFullYear()}</strong></h6>
        </div>
    )
}