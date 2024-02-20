import Blog from "./Blog"
import useFetch from '../hooks/useFetch'

function BlogList(){
    
    const [blogs] = useFetch('http://127.0.0.1:3000/blogs')
    return (
        <div>
            {
                blogs != null ? blogs.map((blog) => {
                    return <Blog
                        // used by react to identify the component in loops
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        author={blog.author}
                        content={blog.content}
                    />
                })
                : 'Loading' // <Loading />
            }

        </div>

    );
}


export default BlogList;