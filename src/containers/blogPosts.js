import React, {Component} from 'react'
import BlogPost from '../components/blogPost.js'
import Container from 'react-bootstrap/Container'
import ScrollAnimation from 'react-animate-on-scroll'

export default class BlogPosts extends Component{
    state={
        blogs:[
            {
                title:"Getting PostgreSQL to Work On A Rails App Using Ubuntu And WSL",
                link: "https://dev.to/nrymarz/getting-postgresql-to-work-on-a-rails-app-using-ubuntu-and-wsl-3hgb"
            },
            {
                title:"Video Game Backlog Tracker App",
                link: "https://dev.to/nrymarz/video-game-backlog-tracker-app-3j69"
            },
            {
                title:"Making A JavaScript Role-Playing Game",
                link: "https://dev.to/nrymarz/making-a-javascript-role-playing-game-1ed"
            },
            {
                title:"My First Ruby On Rails Project",
                link: "https://dev.to/nrymarz/my-first-ruby-on-rails-project-4257"
            },
            {
                title:"My Experience Building A Sinatra Content Management System",
                link: "https://dev.to/nrymarz/my-experience-building-a-sinatra-content-management-system-4d7f"
            },
            {
                title:"My Experience Building My First CLI Project",
                link: "https://dev.to/nrymarz/my-experience-building-my-first-cli-project-2noo"
            },
            {
                title:"Why I Chose Software Engineering",
                link: "https://dev.to/nrymarz/why-i-chose-software-engineering-38am"
            }
        ]
    }

    renderBlogs(){
        return this.state.blogs.map( (blog) => <BlogPost key={blog.title} blog={blog}/>)
    }

    render(){
        return(
            <Container fluid id="blog-posts" className='text-center text-white'>
                <div className="m-auto d-inline-block">
                    <ScrollAnimation animateIn="animate__fadeInDown"><h1>Blog Posts</h1> </ScrollAnimation>
                    {this.renderBlogs()}
                </div>
            </Container>
        )
    }
}