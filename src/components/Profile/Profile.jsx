import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
    return (
      
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
