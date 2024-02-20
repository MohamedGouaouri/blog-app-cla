/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
function Blog(blog){
    return (
        <div className="blog-preview">
                <div>
                    <h3>{blog.title}</h3>
                    <p>By {blog.author}</p>
                </div>
                <Link to={`/blogs/${blog.id}`} >Read more</Link>
            </div>
    );
}


export default Blog;