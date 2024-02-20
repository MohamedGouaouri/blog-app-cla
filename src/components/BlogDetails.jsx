/* eslint-disable react/prop-types */
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
function BlogDetails(){
    const params = useParams()
    // use id to fetch details of the blog api
    const [data] = useFetch(`http://127.0.0.1:3000/blogs/${params.id}`)
    console.log(params.id)
    return (
        <>
            {data ? <div>
            <h3>{data.title}</h3>
            <p>By {data.author}</p>
            <p>{data.content}</p>
        </div>: 'Not found'}
        </>
    );
}


export default BlogDetails;