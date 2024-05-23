import classes from './Post.module.css'

const names = ['Istafa' , 'Anthony']

function Post(props) {

    const name = Math.random() > 0.5 ? names[0] : names [1];

    return (
        <div className={classes.post} >
            <h2 className={classes.name} >{props.name}</h2>
            <p className={classes.text} >{props.body}</p>
        </div>
    );
}

export default Post;