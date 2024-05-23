import classes from './Posts.module.css'

const names = ['Istafa' , 'Anthony']

function Posts(props) {

    const name = Math.random() > 0.5 ? names[0] : names [1];

    return (
        <div className={classes.posts} >
            <h2 className={classes.name} >{props.name}</h2>
            <p className={classes.text} >{props.body}</p>
        </div>
    );
}

export default Posts;