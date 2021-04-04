import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import gmail from '../assets/icons/gmail_icon.png'
import linkedIn from '../assets/icons/linkedIn.png'
export default function Contact(props){
    return(
        <Container className="vh-100 d-flex" id="contact" style={{background:"#353535"}}>
            <Col className="m-auto text-center text-white">
                <h1>Contact Information</h1>
                <h3><img src={gmail} width="50" height="50"/> nrymarz@gmail.com</h3>
                <h3> <img src={linkedIn} width="50" height="50"/> linkedIn.com/in/nathan-rymarz</h3>
            </Col>
        </Container>
    )
}