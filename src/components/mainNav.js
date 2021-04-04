import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import dev from '../assets/icons/dev.png'
import github from '../assets/icons/github.png'
import linkedIn from '../assets/icons/linkedIn.png'

export default function MainNav(){
    return(
        <Navbar variant="dark" fixed='top' style={{background:"#505050"}}>
            <Navbar.Brand>Nathan Rymarz</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="https://github.com/nrymarz" target="_blank"><img src={github} width='50' height='50'/></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/nathan-rymarz/" target="_blank"><img src={linkedIn} width='50' height='50'/></Nav.Link>
            <Nav.Link href="https://dev.to/nrymarz" target="_blank"><img src={dev} width='50' height='50'/></Nav.Link>
            </Nav>
        </Navbar>
    )
}