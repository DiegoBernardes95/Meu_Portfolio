import style from '../assets/styles/Footer.module.css'

export default function Footer(){

    const ano = new Date();

    return(
        <div className={style.fooTer}>
            <h2>Diego <br /> Bernardes</h2>
            <div className={style.listFooter}>
                <a href="#Sobre">Sobre</a>
                <a href="#Tecnologias">Tecnologias</a>
                <a href="#Projetos">Projetos</a>
                <a href="#Contato">Contatos</a>
            </div>
            <h6><strong>©{ano.getFullYear()}</strong></h6>
        </div>
    )
}