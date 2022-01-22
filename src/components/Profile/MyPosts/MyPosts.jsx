import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postData = [
  { id: 1, Like: 10, Dislike: 1, post: "go little rock star" },
  { id: 2, Like: 25, Dislike: 3, post: "you are the best" },
];

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <textarea></textarea>
      <div>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post
          message={postData[0].post}
          LikeCount={postData[0].Like}
          DislikeCount={postData[0].Dislike}
        />
        <Post
          message={postData[1].post}
          LikeCount={postData[1].Like}
          DislikeCount={postData[1].Dislike}
        />
      </div>
    </div>
  );
};

export default MyPosts;
