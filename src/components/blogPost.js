export default function BlogPost({blog}){
    return(
        <a src={blog.link}>{blog.title}</a>
    )
    
}