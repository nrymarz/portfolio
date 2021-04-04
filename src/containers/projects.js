import React, {Component} from 'react'
import Project from '../components/project.js'
import vgPic from '../assets/project_pics/vg_backlog_tracker_pic.png'
import streamPic from '../assets/project_pics/random_stream_finder_pic.png'
import rpgPic from '../assets/project_pics/dragon_adventure_pic.png'

export default class Projects extends Component{
    state={
        projects:[
            {
                name: "Dragon Adventure RPG",
                pic: rpgPic,
                site: "https://dragon-adventure.herokuapp.com/",
                demo: "https://www.youtube.com/watch?v=ZhbnOaCcE2E",
                github: "https://github.com/nrymarz/js-dragon-rpg"
            },
            {
                name: "Video Game Backlog Tracker",
                pic: vgPic,
                site: "https://guarded-temple-25512.herokuapp.com/",
                demo: "https://www.youtube.com/watch?v=pkllnDsc7iU",
                github: "https://github.com/nrymarz/vg-backlog-tracker"
            },
            {
                name: "Twitch.tv Random Stream Finder",
                pic: streamPic,
                site: "https://randomstreamfinder.herokuapp.com/",
                demo: "https://www.youtube.com/watch?v=EoeyYE8D6IU",
                github: "https://github.com/nrymarz/Twitch-Random-Stream-Finder"
            }
        ]
    }
    render(){
        return(
            <>
            </>
        )
    }
}