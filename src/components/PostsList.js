import Posts from './Posts'
import classes from './PostsList.module.css'
import { useLoaderData } from 'react-router-dom'


function PostsList (props) {

    const posts = useLoaderData();

    let displayPosts = posts.map((e) => (
        <Posts key={e.id} name={e.name} body={e.body} />
    ))

    return (

        <>

            <ul className={classes.posts}>
                
                { posts.length > 0 ? displayPosts : (
                    <div style={{ textAlign: 'center' , color: 'red' }} > 
                        <h2 >There are  no posts yet</h2> 
                        <p>Create Some!</p>
                    </div>) } 
            
            </ul>

        </>

    );
}

export default PostsList 