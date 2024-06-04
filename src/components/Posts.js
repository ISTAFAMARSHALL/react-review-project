import classes from './Posts.module.css'

function Posts(props) {

    return (
        <div className={classes.posts} >
            <h2 className={classes.name} >{props.name}</h2>
            <p className={classes.text} >{props.body}</p>
        </div>
    );
}

export default Posts;