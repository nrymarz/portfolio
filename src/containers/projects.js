import React, {Component} from 'react'
import Project from '../components/project.js'
import vgPic from '../assets/project_pics/vg_backlog_tracker_pic.png'
import streamPic from '../assets/project_pics/random_stream_finder_pic.png'
import rpgPic from '../assets/project_pics/dragon_adventure_pic.png'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ScrollAnimation from 'react-animate-on-scroll'

export default class Projects extends Component{
    state={
        projects:[
            {
                name: "Video Game Backlog Tracker",
                pic: vgPic,
                site: "https://guarded-temple-25512.herokuapp.com/",
                demo: "https://www.youtube.com/watch?v=pkllnDsc7iU",
                github: "https://github.com/nrymarz/vg-backlog-tracker",
                description: "This is a web-app that allows users to keep track of games they want to play. It takes inspiration from Rawg.io and uses their API for finding information about games. Users can search for games and add them to their backlog. In their backlog they can categorize games as not played, started or completed.",
                technologies: ["React","Redux","Ruby On Rails","Thunk", "JWT"]
            },
            {
                name: "Dragon Adventure RPG",
                pic: rpgPic,
                site: "https://dragon-adventure.herokuapp.com/",
                demo: "https://www.youtube.com/watch?v=ZhbnOaCcE2E",
                github: "https://github.com/nrymarz/js-dragon-rpg",
                description: "This is a simple turn-based role-playing game made using only javascript and HTML5's Canvas.",
                technologies: ["JavaScript", "HTML5 Canvas"]

            },
            {
                name: "Twitch.tv Random Stream Finder",
                pic: streamPic,
                site: "https://randomstreamfinder.herokuapp.com/",
                demo: "https://www.youtube.com/watch?v=EoeyYE8D6IU",
                github: "https://github.com/nrymarz/Twitch-Random-Stream-Finder",
                description: "This is a web-application that uses the Twitch.tv API to find random streams. It allows users to view streams, login and post recommendations for streamers that they find using this app.",
                technologies: ["Ruby On Rails", "Oauth"]
            }
        ],
    }
    render(){
        return(
            <Container fluid id="projects" className="text-white">
                <Col xl={10} className="m-auto">
                    <ScrollAnimation animateIn="animate__fadeInDown"><h1 className="text-center">Projects</h1> </ScrollAnimation>
                    <hr/>
                    <ScrollAnimation animateIn="animate__fadeIn">
                        {this.renderProjects()}
                    </ScrollAnimation>
                </Col>
            </Container>
        )
    }

    renderProjects(){
        return this.state.projects.map( (proj) => <> <Project project={proj} key={proj.name}/> <br/><br/><br/> </>)
    }
}