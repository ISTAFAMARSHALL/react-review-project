import classes from './NewPost.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

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

        <Modal>
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
                    
                    <Link to=".." type="button" >Cancel</Link>
                    
                    <button>Submit</button>
                </p>
            </form>
        </Modal>
    )
} 

export default NewPost