import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialogItem + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.messaage}>{props.message}</div>;
};

let dialogsData = [
  { id: 1, name: "Ulyana" },
  { id: 2, name: "Kate" },
  { id: 3, name: "Liz" },
  { id: 4, name: "Andrew" },
  { id: 5, name: "Alex" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Nice to hear you" },
  { id: 3, message: "I'm too" },
];

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
