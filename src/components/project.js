import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
export default function Project({project}){
    return(
        <Card className="mx-auto" style={{background:'#303030', width:"75vw"}}>
            <Card.Img src={project.pic} className="mx-auto pt-3" alt={project.name} style={{maxWidth:"50vw", objectFit:'contain'}}/>
            <Card.Body>
                <Card.Title >{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Breadcrumb className="w-50 mx-auto">
                    <Breadcrumb.Item href={project.site} target="_blank" className="ml-auto">Live Site</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.demo} target="_blank">Youtube Demo</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.github} target="_blank" className="mr-auto">Github</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Body>
        </Card>
    )
}