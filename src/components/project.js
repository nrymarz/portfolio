import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Project({project}){
    return(
        <Row>
            <Col xs={12} xl={6} className="d-flex project-about">
                <div className="d-flex flex-column text-center mx-auto w-100">
                    <br/>
                    <h3 className="my-auto">{project.name}</h3>
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
            <Col className='d-flex'> <img src={project.pic} alt={project.name} className="mx-auto project-pic"/> </Col>
        </Row>
    )
}