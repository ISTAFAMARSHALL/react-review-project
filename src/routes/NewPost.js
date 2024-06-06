import classes from './NewPost.module.css'
import { Link, Form, redirect } from 'react-router-dom'
import Modal from '../components/Modal'

function NewPost (props) {

    return (

        <Modal>
            <Form method="post" className={classes.form} >
                <p>
                    <label htmlFor='body'>Text</label>
                    <textarea id='body' name="body" required rows={3} />
                </p>

                <p>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' name="name" required />
                </p>

                <p className={classes.action} >
                    
                    <button >
                        <Link to=".." type="button" style={{ textDecoration: 'none'}} >Cancel</Link>
                    </button>

                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    )
} 

export default NewPost;

export async function action({request}){

   const formData = await request.formData();
   const postData = Object.fromEntries(formData);

    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return redirect('/');
    
}