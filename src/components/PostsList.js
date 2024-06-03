import { useState } from 'react';
import Posts from './Posts'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

function PostsList (props) {

    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredName, setEnteredName ] = useState('');
    


    function bodyChangeHandler (event) {
        setEnteredBody(event.target.value)
    }

    function nameChangeHandler (event) {
        setEnteredName(event.target.value)
    }


    return (

        <>

            {props.isPosting && (<Modal onclose={props.onStopingPost} >
                <NewPost onBodyChange={bodyChangeHandler} onNameChange={nameChangeHandler} onCancel={props.onStopingPost} />
            </Modal>) }

            <ul className={classes.posts}>

                <Posts name={enteredName} body={enteredBody}/>
                <Posts name="Quran" body="Hello I am Quran!"/>
                <Posts name="Jackie" body="Hello I am Jackie!"/>
            
            </ul>

        </>

    );
}

export default PostsList 