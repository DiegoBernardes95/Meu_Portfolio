import '../App.css';
import linkedin from '/public/linkedin.png'
import instagram from '/public/instagram.png'
import github from '/public/github.png'

const Footer = () => {
    return(
        <footer className='myFooter'>
            <ul className='listFooter'>
                <li>
                    <a href="https://github.com/DiegoBernardes95" target='_blank'>
                        <img src={github} alt="" />
                        <h3>GitHub</h3>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/diegobernardes-webdev/" target='_blank'>
                        
                        <h3>Linked</h3>
                        <img src={linkedin} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/diego.dovahkiin/" target='_blank'>
                        <img src={instagram} alt="" />
                        <h3>Instagram</h3>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;