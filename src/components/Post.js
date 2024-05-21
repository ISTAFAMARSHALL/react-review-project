const names = ['Istafa' , 'Anthony']

function Post() {

    const name = Math.random() > 0.5 ? names[0] : names [1];

    return (
        <div>
            <h2>{name}</h2>
            <p>Post Content</p>
        </div>
    );
}

export default Post;