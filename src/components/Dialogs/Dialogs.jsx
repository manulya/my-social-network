import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state=props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  let messagesElemets = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onNewMassageChange = (e) => {
    let body =e.target.value;
    props.updateNewMessageBody(body);
  };
 
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <li> {dialogsElements}</li>
      </div>
      <div className={s.messages}>
        <div>{messagesElemets}</div>
      <div className={s.sendText}>
        <textarea className={s.textMessage} 
        onChange={onNewMassageChange} 
        placeholder="Enter your message" 
        value={newMessageBody}/>
        <button className={s.buttons} onClick={onSendMessageClick}>send</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
