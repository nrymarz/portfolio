import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
export default function Project({project}){
    let height = window.innerHeight*0.4 + 0.2*window.innerWidth
    return(
        <Card className="mx-auto" style={{background:'#303030', height: height}}>
            <Card.Img src={project.pic} className="mx-auto pt-3" alt={project.name} style={{height:"35vh",objectFit:'contain', width:"55vw", maxHeight:"30vw"}}/>
            <Card.Body className="d-inline-flex flex-column">
                <Card.Title className="my-auto">{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Breadcrumb className="w-50 mx-auto mt-auto">
                    <Breadcrumb.Item href={project.site} target="_blank" className="ml-auto">Live Site</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.demo} target="_blank">Youtube Demo</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.github} target="_blank" className="mr-auto">Github</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Body>
        </Card>
    )
}