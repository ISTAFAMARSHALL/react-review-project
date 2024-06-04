import { useState } from 'react'
import Posts from './Posts'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

function PostsList (props) {

    const [ posts , setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPost) => [postData, ...existingPost])
    }

    console.log(posts)
    let displayPosts = posts.map((e) => (
        <Posts name={e.name} body={e.body} />
    ))

    return (

        <>

            {props.isPosting && (<Modal onclose={props.onStopingPost} >
                <NewPost onCancel={props.onStopingPost} onAddPost={addPostHandler} />
            </Modal>) }

            <ul className={classes.posts}>
                
                {displayPosts}
                {/* <Posts name={enteredName} body={enteredBody}/> */}
                {/* <Posts name="Quran" body="Hello I am Quran!"/>
                <Posts name="Jackie" body="Hello I am Jackie!"/> */}
            
            </ul>

        </>

    );
}

export default PostsList 