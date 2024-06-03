import Posts from './Posts'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

function PostsList (props) {

    return (

        <>

            {props.isPosting && (<Modal onclose={props.onStopingPost} >
                <NewPost onCancel={props.onStopingPost} />
            </Modal>) }

            <ul className={classes.posts}>

                {/* <Posts name={enteredName} body={enteredBody}/> */}
                <Posts name="Quran" body="Hello I am Quran!"/>
                <Posts name="Jackie" body="Hello I am Jackie!"/>
            
            </ul>

        </>

    );
}

export default PostsList 