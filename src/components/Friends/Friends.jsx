import React from "react";
import FriendItem from "./FriendsItem";
import s from "./Friends.module.css";
debugger;
const Friends = (props) => {
  let friendsElements = props.state.friends.map((d) => (
    <FriendItem name={d.name}  img={d.img}/>
  ));


  return (
    <nav className={s.sitebar}>
      
      <div>{friendsElements}</div>
    </nav>
  );
};

export default Friends;
