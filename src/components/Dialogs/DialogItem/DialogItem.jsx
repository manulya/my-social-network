import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialogItem}>
      <NavLink to={"/dialogs/" + props.id} className={(navData) => (navData.isActive ? s.active : s.dialogItem)}>{props.name}{props.img}</NavLink>
    </div>
  );
};

export default DialogItem;
