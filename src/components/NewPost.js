import classes from './NewPost.module.css'
import { useState } from 'react'

function NewPost (props) {

    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredName, setEnteredName ] = useState('');
    

    function bodyChangeHandler (event) {
        setEnteredBody(event.target.value)
    }

    function nameChangeHandler (event) {
        setEnteredName(event.target.value)
    }

    function submitHandler (event) {
        event.preventDefault();
        
        const postData = {
            body: enteredBody,
            name: enteredName
        };
        
        props.onAddPost(postData)
        props.onCancel()
    }


    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
            </p>

            <p>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' required onChange={nameChangeHandler} />
            </p>

            <p className={classes.action} >
                
                <button type="button" onClick={props.onCancel}>Cancel</button>
                
                <button>Submit</button>
            </p>
        </form>
    )
} 

export default NewPost