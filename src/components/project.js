import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
export default function Project({project}){
    return(
        <Card bg="dark" variant="dark">
            <Card.Img src={project.pic} className="mx-auto" alt={project.name} style={{height:'50rem', width:"82%", objectFit:'contain'}}/>
            <Card.Body>
                <Card.Title >{project.name}</Card.Title>
                <Card.Text>project description</Card.Text>
                <Breadcrumb className="w-50 mx-auto">
                    <Breadcrumb.Item href={project.site} target="_blank">Live Site</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.demo} target="_blank">Youtube Demo</Breadcrumb.Item>
                    <Breadcrumb.Item href={project.github} target="_blank">Github</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Body>
        </Card>
    )
}