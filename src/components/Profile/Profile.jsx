import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
      <img src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
</div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
