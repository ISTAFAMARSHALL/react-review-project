import { useState } from 'react'
import Posts from './Posts'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

function PostsList (props) {

    const [ posts , setPosts] = useState([]);

    function addPostHandler(postData) {

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        setPosts((existingPost) => [postData, ...existingPost])
    }

    let displayPosts = posts.map((e) => (
        <Posts key={e.id} name={e.name} body={e.body} />
    ))

    return (

        <>

            {props.isPosting && (<Modal onclose={props.onStopingPost} >
                <NewPost onCancel={props.onStopingPost} onAddPost={addPostHandler} />
            </Modal>) }

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