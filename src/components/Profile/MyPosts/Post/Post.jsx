import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="data:image/jpeg;base64,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" />
      <div className={s.posts}>{props.message}
      <div> 
        <span >like</span> {props.likesCount}
        <span> dislike </span> {props.dislikesCount}
      </div>
      </div>
    </div>
  );
};

export default Post;
