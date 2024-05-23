import Posts from './Posts'
import classes from './PostsList.module.css'

function PostsList () {

    return (
        <ul className={classes.posts}>

            <Posts name="Khiry" body="Hello I am Khiry!"/>
            <Posts name="Quran" body="Hello I am Quran!"/>
            <Posts name="Jackie" body="Hello I am Jackie!"/>
        
        </ul>
    );
}

export default PostsList 