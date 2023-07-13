import "../App.css";

const Projetos = () => {
    return (
        <main className="myProjects">
            <ul className="listProjects">
                {/* PRIMEIRO PROJETO */}
                <li id="title1" className="titleProject">
                    <h3>Projeto <br /><span>"O Clone"</span></h3>
                </li>
                <li id="project1" className="projectImg"></li>
                <li id="description1" className="descriptionProject">
                    <p>Projeto de clonagem da landing page da Netflix.<br />Feito com HTML, CSS e JavaScript puro para exercitar os conhecimentos básicos nestas tecnologias. <br /></p>
                    <a href="https://diegobernardes95.github.io/O_Clone/" target="_blank">1_Acessar projeto</a>
                </li>
                {/* SEGUNDO PROJETO */}
                <li id="title2" className="titleProject">
                    <h3>Projeto <br /><span>"Decodificador"</span></h3>
                </li>
                <li id="project2" className="projectImg"></li>
                <li id="description2" className="descriptionProject">
                    <p>Codificador e Decodificador de Cifra de César e Base64. <br />Projeto desenvolvido no curso "Programadores Cariocas" com a intenção de exercitar a manipulação do DOM.</p>
                    <a href="https://diegobernardes95.github.io/Projeto-Mensagem-Oculta/" target="_blank">2_Acessar projeto</a>
                </li>
                {/* TERCEIRO PROJETO */}
                <li id="title3" className="titleProject">
                    <h3>Projeto <br /><span>"Sweet Cine"</span></h3>
                </li>
                <li id="project3" className="projectImg"></li>
                <li id="description3" className="descriptionProject">
                    <p>O projeto Sweet Cine foi criado com o intuito de conceder ao usuário um lugar para guardar suas experiências no cinema, catalogando seus filmes assistidos e cinemas frequentados e fornecendo um levantamento sobre os dados armazenados.</p>
                    <a href="https://github.com/DiegoBernardes95/Sweet_Cine" target="_blank">3_Link do projeto</a>
                </li>
                {/* QUARTO PROJETO */}
                <li id="title4" className="titleProject">
                    <h3>Projeto <br /><span>"Adote aqui!"</span></h3>
                </li>
                <li id="project4" className="projectImg"></li>
                <li id="description4" className="descriptionProject">
                    <p>Projeto desenvolvido no curso "Programadores Cariocas", utilizando HTML & CSS, para a ONG fictícia “Adote Aqui”.</p>
                    <a href="https://diegobernardes95.github.io/Projeto-Adote-Aqui/" target="_blank">4_Acessar projeto</a>
                </li>
            </ul>
        </main>
    )
}

export default Projetos;