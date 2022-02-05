import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friends.module.css";

const FriendItem = (props) => {
    return (
      <div className={s.sitebar}>
        {props.name}{props.img}
      </div>
    );
  };

export default FriendItem;
