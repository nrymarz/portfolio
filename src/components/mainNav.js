import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import dev from '../assets/icons/devIcon.png'

export default function MainNav(){
    return(
        <Container>
            <Navbar bg='dark' variant="dark" fixed='top'>
                <Navbar.Brand>Nathan Rymarz</Navbar.Brand>
            </Navbar>
        </Container>
    )
}