import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export default function About(){
    return(
        <Container className='vh-100 d-flex' style={{background:"#252525"}}>
            <Row>
                <Col xs={7} className="m-auto text-center text-white">
                    <h1>About Me</h1>
                    <br/>
                    <i>
                        Dedicated and passionate programmer that excels at problem solving and creating solutions. 
                        Adaptable and fast learner with strong critical thinking skills and the ability to create impactful and effective web applications. 
                        Thrives when challenged to hunt down bugs and write creative and clean code.
                        <br/><br/>
                        Proud to be highly independent and motivated to create interesting and effective software.
                        I am always challenged and excited to figure out problems and get a thrill from solving them. 
                        I love programming and have always had an interest in technology since I was young.
                        <br/><br/>
                        Whether it was troubleshooting my internet for the thousandth time or taking apart my Xbox 360 to fix the infamous red ring of death myself, 
                        I always had an earnest desire to find a way to solve problems with technology. 
                        Now, I am aiming to apply my skills and passion for problem solving for a company seeking a dedicated, adaptable and reliable software engineer.
                    </i>
                </Col>
            </Row>
        </Container>
    )
    
}