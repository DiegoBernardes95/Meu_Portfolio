import '../App.css';

const Footer = () => {
    return(
        <footer className='myFooter'>
            <ul className='listFooter'>
                <li>
                    <a href="https://github.com/DiegoBernardes95" target='_blank'>
                        <h3>Github</h3>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/diegobernardes-webdev/" target='_blank'>
                        <h3>LinkedIn</h3>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/diego.dovahkiin/" target='_blank'>
                        <h3>Instagram</h3>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;