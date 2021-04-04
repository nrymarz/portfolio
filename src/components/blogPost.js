import ScrollAnimation from 'react-animate-on-scroll'
export default function BlogPost({blog, direction}){
    return(
        <ScrollAnimation animateIn={`animate__fadeIn${direction}`}>
            <h2 className="py-2"><a href={blog.link} target="_blank" rel="noreferrer">{blog.title}</a></h2>
        </ScrollAnimation>
    )
    
}