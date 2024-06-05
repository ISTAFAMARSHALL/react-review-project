import { useState , useEffect } from 'react'
import Posts from './Posts'
import classes from './PostsList.module.css'
import NewPost from '../routes/NewPost'
import Modal from './Modal'

function PostsList (props) {


    const [ posts , setPosts] = useState([]);
    const [ isfetching, setIsFetching ] = useState(false)

    useEffect(() => {
        async function fecthPosts() {
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts)
            setIsFetching(false)
        }
        fecthPosts()
    } , [])

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
                
                { posts.length > 0 || isfetching ? displayPosts : (
                    <div style={{ textAlign: 'center' , color: 'red' }} > 
                        <h2 >There are  no posts yet</h2> 
                        <p>Create Some!</p>
                    </div>) } 
            
            </ul>

            {isfetching && (<p style={{ textAlign: 'center' , color: 'red' }} > LOADING PLEASE WAIT ... </p>) }

        </>

    );
}

export default PostsList 