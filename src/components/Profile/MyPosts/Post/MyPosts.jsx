import React from "react";
import s from "../MyPosts.module.css";
import Post from "../Post/Post";



const MyPosts = (props) => {
  let postsElements = 
  props.posts.map((p) => (
    <Post
      img={p.img}
      message={p.message}
      likesCount={p.likesCount}
      dislikesCount={p.dislikesCount}
    />
  ));

  let onAddPost = () => {
    props.addPost();
      };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
   
  };

  let newPostElement = React.createRef();

  return (
    <div className={s.postsBlock}>
      <h3 className={s.myposts}>My posts</h3>
      <textarea className={s.postText}
        onChange={onPostChange}
        placeholder="Enter your post"
        ref={newPostElement}
        value={props.newPostText}
      />
      <div >
        <button className={s.buttons} onClick={onAddPost} >Add Post</button>
        <button className={s.buttons}>Remove</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
