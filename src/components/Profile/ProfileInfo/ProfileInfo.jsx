import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div >
      <div>
      <img src="https://i.pinimg.com/564x/37/ef/be/37efbe5870be4303272afb22d3cc7c57.jpg" />
</div >
      <div className={s.descriptonInfo}>
          ava + description
          </div>
    </div>
  );
};

export default ProfileInfo;