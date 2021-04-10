import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
export default function Project({project}){
    return(
        <Card className="mx-auto" style={{background:'#303030'}}>
            <Card.Img src={project.pic} className="mx-auto pt-3" alt={project.name} style={{height:'35vh', objectFit:'contain', width:"55vw"}}/>
            <Card.Body className="d-inline-flex flex-column">
                <Card.Title className="my-auto">{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Breadcrumb className="w-75 mx-auto mt-auto">
                    <Breadcrumb.Item href={project.site} target="_blank" className="ml-auto">Live Site</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.demo} target="_blank">Youtube Demo</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.github} target="_blank" className="mr-auto">Github</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Body>
        </Card>
    )
}