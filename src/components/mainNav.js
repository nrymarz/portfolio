import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import dev from '../assets/icons/dev.png'
import github from '../assets/icons/github.png'
import linkedIn from '../assets/icons/linkedIn.png'
import {Link} from 'react-scroll'

export default function MainNav(){
    return(
        <Navbar variant="dark" className="flex-column">
            <Nav>
                <Navbar.Brand>Nathan Rymarz</Navbar.Brand>
                <Nav.Link href="https://www.linkedin.com/in/nathan-rymarz/" target="_blank"><img src={linkedIn} alt="LinkedIn icon" className='nav-icon' /></Nav.Link>
                <Nav.Link href="https://github.com/nrymarz" target="_blank"><img src={github} alt="github icon" className='nav-icon' /></Nav.Link>
                <Nav.Link className = "my-auto"href="https://dev.to/nrymarz" target="_blank"><img src={dev} alt="dev.to icon" className='nav-icon'/></Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="about" smooth={true} spy={true} duration={500}>About Me</Nav.Link>
                <Nav.Link as={Link} to="projects" smooth={true} spy={true} duration={500}>Projects</Nav.Link>
                <Nav.Link as={Link} to="blog-posts" smooth={true} spy={true} duration={500}>Blog Posts</Nav.Link>
                <Nav.Link as={Link} to="contact" smooth={true} spy={true} duration={500}>Contact Info</Nav.Link>
            </Nav>
        </Navbar>
    )
}