import React, {Component} from 'react'
import BlogPost from '../components/blogPost.js'
import Container from 'react-bootstrap/Container'
import ScrollAnimation from 'react-animate-on-scroll'

export default class BlogPosts extends Component{
    state = {blogs:[]}

    componentDidMount(){
        fetch('https://dev.to/api/articles?username=nrymarz')
            .then(res => res.json())
            .then(json => this.setState({blogs: json}))
    }

    renderBlogs(){
        return this.state.blogs.map( (blog) => <BlogPost key={blog.id} blog={blog}/>)
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