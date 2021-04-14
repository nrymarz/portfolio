import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Project({project, idx}){
    function renderCardImage(){
        return <Col> <Card.Img src={project.pic} alt={project.name} style={{height:"100%", objectFit:"fill"}}/> </Col>
    }
    return(
        <Card className="my-3">
            <Row noGutters>
                {idx%2===0 ? renderCardImage() : null}
                <Col className="d-flex">
                    <Card.Body className="d-inline-flex flex-column">
                        <Card.Title className="my-auto">{project.name}</Card.Title>
                        <br/>
                        <Card.Text>{project.description}</Card.Text>
                        <Card.Text>{project.technologies.join(', ')}</Card.Text>
                        <Breadcrumb className="w-75 mx-auto mt-auto">
                            <Breadcrumb.Item href={project.site} target="_blank" className="ml-auto">Live Site</Breadcrumb.Item>
                            <Breadcrumb.Item href={project.demo} target="_blank">Youtube Demo</Breadcrumb.Item>
                            <Breadcrumb.Item href={project.github} target="_blank" className="mr-auto">Github</Breadcrumb.Item>
                        </Breadcrumb>
                    </Card.Body>
                </Col>
                {idx%2===1 ? renderCardImage() : null}
            </Row>
        </Card>
    )
}