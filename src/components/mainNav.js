import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import dev from '../assets/icons/dev.png'
import github from '../assets/icons/github.png'
import linkedIn from '../assets/icons/linkedIn.png'

export default function MainNav(){
    return(
        <Navbar variant="dark" fixed='top' style={{background:"#505050"}} className="flex-column">
            <Nav className="justify-content-center">
                <Navbar.Brand>Nathan Rymarz</Navbar.Brand>
                <Nav.Link href="https://github.com/nrymarz" target="_blank"><img src={github} width='40' height='40'/></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/nathan-rymarz/" target="_blank"><img src={linkedIn} width='40' height='40'/></Nav.Link>
                <Nav.Link href="https://dev.to/nrymarz" target="_blank"><img src={dev} width='40' height='40'/></Nav.Link>
            </Nav>
            <Nav fill className="w-50">
                <Nav.Link>About Me</Nav.Link>
                <Nav.Link>Projects</Nav.Link>
                <Nav.Link>Blog Posts</Nav.Link>
                <Nav.Link>Contact Info</Nav.Link>
            </Nav>
        </Navbar>
    )
}