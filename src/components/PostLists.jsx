import { useState } from "react";
import Post from "./post";
import Modal from "./Modal";
import NewPost from "./NewPost";
import classes from "./PostsLists.module.css";

function PostLists() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authorChangeHandler}

                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
            </ul>;
        </>
    );
}

export default PostLists;