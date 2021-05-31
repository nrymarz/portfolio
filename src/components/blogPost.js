import ScrollAnimation from 'react-animate-on-scroll'
export default function BlogPost({blog}){
    return(
        <ScrollAnimation animateIn={`animate__flipInX`}>
            <h3 className="py-2 blogpost"><a href={blog.url} target="_blank" rel="noreferrer">{blog.title}</a></h3>
        </ScrollAnimation>
    )
    
}