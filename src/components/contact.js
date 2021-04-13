import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import gmail from '../assets/icons/gmail_icon.png'
import linkedIn from '../assets/icons/linkedIn.png'
import resumeIcon from '../assets/icons/resume_icon.png'
import ScrollAnimation from 'react-animate-on-scroll'
export default function Contact(){
    return(
        <Container fluid id="contact">
            <Col className="m-auto text-center text-white">
                <ScrollAnimation animateIn="animate__fadeIn">
                    <h1>Contact Information</h1>
                    <h3><img src={gmail} alt="gmail icon" width="50" height="50"/> nrymarz@gmail.com</h3>
                    <h3> <img src={linkedIn} alt="LinkedIn icon" width="50" height="50"/><a href="https://www.linkedIn.com/in/nathan-rymarz" target="_blank" rel="noreferrer"> LinkedIn Profile</a> </h3>
                    <h3><img src={resumeIcon} alt="resume icon" width="50" height="50"/><a href="./NathanRymarz.pdf" target="_blank" rel="noreferrer"> Resume PDF</a></h3>
                </ScrollAnimation>
            </Col>
        </Container>  
    )
}