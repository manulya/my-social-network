import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p=><Post 
  message={p.message}
  likesCount={p.likesCount}
  dislikesCount={p.dislikesCount}
/>);

let newPostElement = React.createRef();
let addPost=()=>{
let text=newPostElement.current.value;
props.addPost(text);
text=newPostElement.current.value='';
}

return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <textarea ref={newPostElement}></textarea>
      <div>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
      {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
