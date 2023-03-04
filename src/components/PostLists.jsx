import Post from "./post";
import NewPost from "./NewPost";
import classes from "./PostsLists.module.css";

function PostLists() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="asd" body="asd" />
                <Post body="asdsad" />
            </ul>;
        </>
    );
}

export default PostLists;