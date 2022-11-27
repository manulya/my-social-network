import React from "react";
import s from "./Post.module.css";
import avatar from "../../../../img/avatar.png"

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <div className={s.posts}>
       
      {props.img}
       {props.message}
      <div className={s.count}> 
        <span className={s.like}>like {props.likesCount}</span> 
        <span className={s.dislike}> dislike {props.dislikesCount}</span> 
      </div>
      </div>
    </div>
  );
};

export default Post;
