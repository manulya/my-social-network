import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
    return (
      
    <div>
      <ProfileInfo />
      <MyPostsContainer  store={props.store} />
    </div>
  );
};

export default Profile;
