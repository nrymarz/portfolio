import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Project({project}){
    return(
        <Row>
            <Col className='d-flex'> <img src={project.pic} alt={project.name} className="mx-auto" style={{width:"100%", objectFit:"contain"}}/> </Col>
            <Col className="d-flex">
                <div className="d-flex flex-column">
                    <h3>{project.name}</h3>
                    <br/>
                    <p className="my-auto">{project.description}</p>
                    <p>{project.technologies.join(', ')}</p>
                    <Breadcrumb className=" mt-auto">
                        <Breadcrumb.Item href={project.site} target="_blank" className="ml-auto">Live Site</Breadcrumb.Item>
                        <Breadcrumb.Item href={project.demo} target="_blank">Youtube Demo</Breadcrumb.Item>
                        <Breadcrumb.Item href={project.github} target="_blank" className="mr-auto">Github</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </Col>
        </Row>
    )
}