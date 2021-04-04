import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import dev from '../assets/icons/dev.png'
import github from '../assets/icons/github.png'
import linkedIn from '../assets/icons/linkedIn.png'
import {Link} from 'react-scroll'

export default function MainNav(){
    return(
        <Navbar bg='dark' variant="dark" fixed='top' className="flex-column">
            <Nav className="justify-content-center">
                <Navbar.Brand className="my-auto">Nathan Rymarz</Navbar.Brand>
                <Nav.Link className="my-auto" href="https://www.linkedin.com/in/nathan-rymarz/" target="_blank"><img src={linkedIn} alt="LinkedIn icon" width='40' height='40'/></Nav.Link>
                <Nav.Link className="my-auto" href="https://github.com/nrymarz" target="_blank"><img src={github} alt="github icon" width='40' height='40'/></Nav.Link>
                <Nav.Link className="my-auto" href="https://dev.to/nrymarz" target="_blank"><img src={dev} alt="dev.to icon" width='40' height='40'/></Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="about" smooth={true} spy={true} duration={250}>About Me</Nav.Link>
                <Nav.Link as={Link} to="projects" smooth={true} spy={true} duration={250}>Projects</Nav.Link>
                <Nav.Link as={Link} to="blog-posts" smooth={true} spy={true} duration={250}>Blog Posts</Nav.Link>
                <Nav.Link as={Link} to="contact" smooth={true} spy={true} duration={250}>Contact Info</Nav.Link>
            </Nav>
        </Navbar>
    )
}