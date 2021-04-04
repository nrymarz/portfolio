import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
export default function About(){
    return(
        <Container id="about" className='vh-100 d-flex about' style={{background:"#252525"}} >
            <Col xs={9} className="m-auto text-center text-white">
                <h1>About Me</h1>
                <i>
                    I am a dedicated and passionate programmer that excels at problem solving and creating solutions. I take pride in being
                    adaptable and quick to pick up new skills while having strong critical thinking skills and the ability to create impactful and effective web applications.
                    <br/><br/>
                    Employers will find that I am highly independent and motivated to create interesting and effective software.
                    I am always challenged and excited to figure out problems and get a thrill from solving them. 
                    I love programming and have always had an interest in technology since I was young.
                    <br/><br/>
                    Whether it was troubleshooting my internet for the thousandth time or taking apart my Xbox 360 to fix the infamous red ring of death myself, 
                    I always had an earnest desire to find a way to solve problems with technology. 
                    Now, I am aiming to apply my skills and passion for problem solving for a company seeking a dedicated, adaptable and reliable software engineer.
                    <br/><br/>
                    <b>My Stack</b>
                    <br/>
                    Ruby on Rails, JavaScript, React, Redux
                </i>
            </Col>
        </Container>
    )
    
}