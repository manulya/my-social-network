import React from "react";
import { addPostActionCreator, updateNewPosttextActionCreator } from "../../../../redux/profile-reducer";
import s from "../MyPosts.module.css";
import Post from "../Post/Post";



const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      likesCount={p.likesCount}
      dislikesCount={p.dislikesCount}
    />
  ));

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPosttextActionCreator(text));
  };

  let newPostElement = React.createRef();

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <textarea className={s.postText}
        onChange={onPostChange}
        placeholder="Enter your post"
        ref={newPostElement}
        value={props.newPostText}
      />
      <div >
        <button className={s.buttons} onClick={addPost} >Add Post</button>
        <button className={s.buttons}>Remove</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
