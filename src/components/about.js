import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ScrollAnimation from 'react-animate-on-scroll'
export default function About(){
    return(
        <Container fluid id="about" className='about'>
            <Col xs={9} className="m-auto text-center text-white">
                <ScrollAnimation animateIn="animate__fadeInDown"> <h1>About Me</h1> </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn">
                    <i>
                        I am a dedicated and passionate programmer that excels at problem solving and creating solutions. I take pride in being
                        adaptable and quick to pick up new skills while having strong critical thinking skills and the ability to create impactful and effective web applications.
                        <br/><br/>
                        Employers will find that I am highly independent and motivated to create interesting and effective software.
                        I am always challenged and excited to figure out problems. 
                        I love programming and have always had an interest in technology since I was young.
                        <br/><br/>
                        Whether it was troubleshooting my internet for the thousandth time or taking apart my Xbox 360 to fix the infamous red ring of death myself, 
                        I always had an earnest desire to find a way to solve problems with technology. Now I am currently looking to apply my skills
                        for a company seeking a dedicated, adaptable and reliable software engineer.
                    </i>
                </ScrollAnimation>
            </Col>
        </Container>
    )
    
}