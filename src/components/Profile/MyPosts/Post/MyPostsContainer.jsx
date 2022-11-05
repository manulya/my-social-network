import React from "react";
import { addPostActionCreator, updateNewPosttextActionCreator } from "../../../../redux/profile-reducer";
import s from "../MyPosts.module.css";
import MyPosts from "./MyPosts";
import Post from "./Post";



const MyPostsContainer = (props) => {
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

  return(<MyPosts/>)
};

export default MyPostsContainer;
